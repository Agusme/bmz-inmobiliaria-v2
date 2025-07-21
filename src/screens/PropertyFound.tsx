import { TbMoodSadSquint } from "react-icons/tb";
import PropietyCard from "../components/Propiedades/PropietyCard";
import { usePropertyStore } from "../store/propertyStore";

export default function PropertyFound() {
    const { searchResults} = usePropertyStore()
    return (
        <div className="relative bg-[url('/terreno.jpeg')] bg-cover  min-h-[60vh] ">
            <div className="bg-black/60  min-h-[60vh]">
                <div className="max-w-5xl mx-auto py-5 px-4">
                    <h2 className="text-white text-lg font-semibold mb-6">BUSCANDO: </h2>
                    {searchResults.length > 0 ? <PropietyCard />
                        : (<div className="flex justify-center">
                            <p className="text-white" >No se encontraron coincidencias en la búsqueda </p> <TbMoodSadSquint size={25} color="white" />

                        </div>)}
                </div></div>
        </div>

    )
}
