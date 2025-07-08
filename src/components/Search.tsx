import { FormEvent } from "react"

export default function Search() {
const BuscarPropiedad=(e: FormEvent<HTMLFormElement>)=>{
e.preventDefault()
console.log('Buscando propiedad...')
}
    return (
        <div className="mx-auto container">
            <h2 className="font-semibold  uppercase my-4  text-center  text-zinc-500 text-2xl">Encontrá lo que estas buscando </h2>
            <div className=" rounded-lg relative bg-[url('../../src/assets/carrusel/terreno.jpeg')] bg-cover bg-center h-60 sm:h-40">
                <div className="absolute inset-0 rounded-lg bg-black/50">
                    <form className="flex md:flex-row items-center flex-col  justify-around h-full" onSubmit={(e)=>BuscarPropiedad(e)}>
                        <select defaultValue="Tipo de operación" className="select w-80">
                            <option disabled={true}>Tipo de operación </option>
                            <option>Compra</option>
                            <option>Alquiler</option>
                        </select>
                        <select defaultValue="Tipo de propiedad" className="select w-80">
                            <option disabled={true}>Tipo de propiedad</option>
                            <option>Casa</option>
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
