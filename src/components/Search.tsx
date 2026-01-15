import { FormEvent, useEffect, useState } from "react"
import { usePropertyStore } from "../store/propertyStore"
import { useNavigate } from "react-router-dom"

export default function Search() {
    const { searchProperty, searchResults } = usePropertyStore()
const [typeTransaction, setTypeTransaction]= useState('')
const [typeProperty, setTypeProperty]= useState('')
const navigate = useNavigate()

const BuscarPropiedad = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('typeTransaction:', typeTransaction);
  console.log('typeProperty:', typeProperty);

  if (!typeTransaction || !typeProperty) {
    console.warn("Faltan datos para buscar");
    return;
  }

  searchProperty({ typeTransaction, typeProperty });
console.log(searchResults)
  navigate("/propiedadesEncontradas");
};
 useEffect(() => {
        console.log("Propiedades actualizadas:", searchResults)
    }, [searchResults])

    return (
        <div className="mx-auto container mt-10 mb-20 ">
            <h2 className="font-thin  uppercase mb-10 text-center  text-zinc-500 text-3xl">Encontrá lo que estas buscando </h2>
            <div className=" rounded-lg relative bg-[url('/terreno.webp')] bg-cover bg-center h-60 sm:h-40">
                <div className="absolute inset-0 rounded-lg bg-black/50">
                    <form className="flex md:flex-row items-center flex-col  justify-around h-full"   onSubmit={BuscarPropiedad}>
                        <select defaultValue="Tipo de operación" className="select w-80"  onChange={(e) => setTypeTransaction(e.target.value)}
                        >
                            <option disabled={true}>Tipo de operación </option>
                            <option>Venta</option>
                            <option>Alquiler</option>
                        </select>
                        <select defaultValue="Tipo de propiedad" className="select w-80"             onChange={(e) => setTypeProperty(e.target.value)}>
                            <option disabled={true}>Tipo de propiedad</option>
                            <option >Casa</option>
                            <option>Departamento</option>
                            <option>Terreno</option>
                            <option>Local comercial</option>
                        </select>
                        <button className="btn btn-active">
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
