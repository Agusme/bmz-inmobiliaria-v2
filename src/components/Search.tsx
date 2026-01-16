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
<div className="mx-auto container mt-10 mb-20">
  <h2 className="font-thin uppercase mb-10 text-center text-zinc-600 md:text-zinc-700
 text-3xl">
    Encontrá lo que estas buscando
  </h2>
  <div className="md:-mt-5">
    
            <div className=" rounded-lg relative bg-[url('/terreno.webp')] bg-cover bg-center h-60 sm:h-40">
           <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur-sm">

                   <form
 className="
  bg-white/90 backdrop-blur-md
  rounded-xl
  shadow-lg
  px-6 py-4
  flex flex-col md:flex-row
  gap-4
  items-center
"
  onSubmit={BuscarPropiedad}
>
  <div className="w-80">
    <label htmlFor="typeTransaction" className="sr-only">
      Tipo de operación
    </label>
    <select
      id="typeTransaction"
    
className="select select-bordered bg-white/95 w-full md:w-72"

      value={typeTransaction}
      onChange={(e) => setTypeTransaction(e.target.value)}
    >
      <option value="" disabled>
        Tipo de operación
      </option>
      <option value="Venta">Venta</option>
      <option value="Alquiler">Alquiler</option>
    </select>
  </div>

  <div className="w-80">
    <label htmlFor="typeProperty" className="sr-only">
      Tipo de propiedad
    </label>
    <select
      id="typeProperty"
      className="select select-bordered bg-white/95 w-full md:w-72"

      value={typeProperty}
      onChange={(e) => setTypeProperty(e.target.value)}
    >
      <option value="" disabled>
        Tipo de propiedad
      </option>
      <option>Casa</option>
      <option>Departamento</option>
      <option>Terreno</option>
      <option>Local comercial</option>
    </select>
  </div>

<button
  disabled={!typeTransaction || !typeProperty}
className="btn btn-primary px-8 disabled:opacity-50"
>
Buscar propiedades →
</button>
</form>

                </div>
            </div>
  </div>
        </div>
    )
}
