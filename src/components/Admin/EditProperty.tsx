import { useForm } from "react-hook-form";
import { Property } from "../../types/PropertyTypes"
import { useEffect, useState } from "react";
import { usePropertyStore } from "../../store/propertyStore";
import Swal from "sweetalert2";

type Props = {
  propiedad: Property | null;
  onClose: () => void | undefined
}
export default function EditProperty({ propiedad, onClose }: Props) {

const {updateProperty,   fetchProperties}= usePropertyStore()

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      typeProperty: propiedad?.typeProperty,
      typeTransacion: propiedad?.typeTransaction,
      bathroom: propiedad?.bathroom,
      bedroom: propiedad?.bedroom,
      location: propiedad?.location,
      description: propiedad?.description,
      map: propiedad?.map,
    }
  })
const [files, setFiles] = useState<File[]>([]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (data: any) => {
  if (!propiedad?._id) return;

  const formData = new FormData();
  formData.append("typeProperty", data.typeProperty);
 formData.append("typeTransacion", data.typeTransacion);
  formData.append("bathroom", data.bathroom);
  formData.append("bedroom", data.bedroom);
  formData.append("location", data.location);
  formData.append("description", data.description);
  formData.append("map", data.map);
 
  files.forEach((file)=> {
    formData.append("images", file);
  })
 
  updateProperty(propiedad._id, formData);
  
  Swal.fire({
    title: "Propiedad editada!",
    icon: "success",
    timer: 2000,
  });
  fetchProperties();
  onClose?.();
};

  useEffect(() => {
    reset({
      typeProperty: propiedad?.typeProperty || "", typeTransacion: propiedad?.typeTransaction, bathroom: propiedad?.bathroom, bedroom: propiedad?.bathroom, location: propiedad?.location, description: propiedad?.description,
      map: propiedad?.map,

    })
  }, [propiedad, reset])
  return (

    <div className="modal-box">
      <h3 className="text-lg font-bold">Editar Propiedad</h3>
      <form className="px-5  py-10 grid   gap-x-10 gap-y-5 mx-auto max-w-6xl" onSubmit={handleSubmit(onSubmit)} >
        <div className="col-span-2 md:col-span-1">
          <label htmlFor="typeProperty"
            className={`select w-full`}
          >
            <span className="label">Tipo de Propiedad</span>
            <select id="typeProperty"  {...register('typeProperty')}
            >
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Local">Local</option>
            </select>
          </label>
        </div><div className="col-span-2 md:col-span-1">
          <label className={`select w-full `} >
            <span className="label">Tipo de Transacción</span>
            <select {...register('typeTransacion')}>
              <option value="Venta" >Venta</option>
              <option value="Alquiler">Alquiler</option>
            </select>
          </label>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="select w-full" >
            <span className="label">Baños</span>
            <select {...register('bathroom')}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </label>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="select w-full" >
            <span className="label">Dormitorios</span>
            <select defaultValue='' {...register('bedroom')}
            ><option disabled value="">Seleccionar</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </label>
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className={`input w-full`} >
            <span className="label">Localidad</span>
            <input type="text" placeholder="Ej: Yerba Buena" {...register('location')} />
          </label>
        </div>
        <div className="col-span-2 md:col-span-1">

          <textarea className={`textarea w-full  `} placeholder="Describe la propiedad..." {...register('description')} ></textarea>

        </div>
        <div className="col-span-2 md:col-span-1">

          <label className={`select w-full`} >
            <span className="label">Mapa</span>
            <input type="text" placeholder="URL" {...register('map')} />
          </label>

        </div>
           <div className="col-span-2 md:col-span-1">

          <label className={`select w-full`} >
            <span className="label">Imagenes</span>
<input type="file"  multiple        onChange={(e) => {
  if (e.target.files) {
    setFiles(Array.from(e.target.files));
  }
}}
 />              

          </label>

        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-success " >Guardar Cambios</button>
        </div>
      </form>


      <div className="modal-action">
        <label htmlFor="my_modal_6" className="btn" onClick={() => onClose()}>Cerrar</label>
      </div>
    </div>
  )
}
