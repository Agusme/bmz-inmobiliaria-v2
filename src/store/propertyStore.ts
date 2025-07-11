import { create } from "zustand";
import { Property } from "../types/PropertyTypes";
import {
  deletePropertyService,
  getProperties,
  updatePropertyService,
} from "../services/PropertyServices";
import Swal from "sweetalert2";

type PropertyStore = {
  propiedades: Property[];
  loading: boolean;
  fetchProperties: () => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  updateProperty: (id: string,data: FormData  ) => Promise<void>
};
export const usePropertyStore = create<PropertyStore>((set) => ({
  propiedades: [],
  loading: false,

  fetchProperties: async () => {
    set({ loading: true });
    try {
      const data = await getProperties();
      set({ propiedades: data });
    } catch (error) {
      console.error("Error al obtener propiedades:", error);
    } finally {
      set({ loading: false });
    }
  },

  deleteProperty: async (id: string) => {
    set({ loading: true });
    try {
      await deletePropertyService(id);
      set((state) => ({
        propiedades: state.propiedades.filter((p) => p._id !== id),
      }));
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    } catch (error) {
      console.error("Error al eliminar propiedad:", error);
      alert("Ocurrió un error al eliminar");
    } finally {
      set({ loading: false });
    }
  },

  updateProperty: async(id:string, data: FormData )=>{
    try {
     const updated= await updatePropertyService(id, data);
     set((state)=>({
      propiedades:state.propiedades.map((p)=> p._id === id ? {...p, updated} : p)
     }))
    ;
    } catch (error) {
    console.error("Error al actualizar propiedad:", error);
    }
  }

  
}));
