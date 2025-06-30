import { create } from "zustand";
import { Property } from "../types/PropertyTypes";
import {
  deletePropertyService,
  getProperties,
} from "../services/PropertyServices";

type PropertyStore = {
  propiedades: Property[];
  loading: boolean;
  fetchProperties: () => Promise<void>;
    deleteProperty: (id: string) => Promise<void>;

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
       alert("Propiedad eliminada con éxito");
    } catch (error) {
      console.error("Error al eliminar propiedad:", error);
        alert("Ocurrió un error al eliminar");

    } finally {
      set({ loading: false });
    }
  },
}));
