import { Property } from "../../types/PropertyTypes"

type Props ={
    propiedad: Property | null;
     onClose: () => void | undefined
}
export default function EditProperty({propiedad, onClose}: Props) {
  return (

   <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">{propiedad?.location} </p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn" onClick={()=>onClose()}>Close!</label>
    </div>
  </div>
  )
}
