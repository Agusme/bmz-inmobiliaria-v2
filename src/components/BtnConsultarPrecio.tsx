import { useParams } from "react-router-dom"
import { usePropertyStore } from "../store/propertyStore"

type BtnConsultarPrecioProps = {
  className?: string; 
};

export default function BtnConsultarPrecio({ className = "" }: BtnConsultarPrecioProps)  {
    const {id}= useParams()
    const {propiedades}= usePropertyStore()
    const propiedad = propiedades.find((p)=>p._id === id)

    return (
       
                      <a
                    href={`https://wa.me/5491123456789?text=${encodeURIComponent(
                      `Hola, estoy interesada en la propiedad ubicada en ${propiedad?.location}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  className={`btn bg-yellow-400 text-xs px-4 py-2 uppercase shadow-2xl rounded-3xl ${className}`}

                  >
                    consultar precio
                  </a>
            
)
}
