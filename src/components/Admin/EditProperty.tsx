import { useForm } from "react-hook-form";
import { Property } from "../../types/PropertyTypes"
import { useEffect } from "react";

type Props = {
  propiedad: Property | null;
  onClose: () => void | undefined
}
export default function EditProperty({ propiedad, onClose }: Props) {

const {register, reset}= useForm({
  defaultValues:{
  typeProperty: propiedad?.typeProperty  || ""
  }
})

useEffect(()=>{ reset({typeProperty: propiedad?.typeProperty || ""})},[propiedad, reset])
  return (

    <div className="modal-box">
      <h3 className="text-lg font-bold">Editar Propiedad</h3>
         <form className="px-5  py-10 grid   gap-x-10 gap-y-5 mx-auto max-w-6xl"  >
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="typeProperty"
                        className={`select w-full`}
                    >
                        <span className="label">Tipo de Propiedad</span>
                        <select id="typeProperty"  {...register('typeProperty')}
                        >
                            <option disabled value="">Seleccionar</option>
                            <option value="Casa">Casa</option>
                            <option value="Departamento">Departamento</option>
                            <option value="Terreno">Terreno</option>
                            <option value="Local">Local</option>
                        </select>
                    </label>
        </div>
      </form>


      <div className="modal-action">
        <label htmlFor="my_modal_6" className="btn" onClick={() => onClose()}>Close!</label>
      </div>
    </div>
  )
}
