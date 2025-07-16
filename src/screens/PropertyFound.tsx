import { TbMoodSadSquint } from "react-icons/tb";
import PropietyCard from "../components/Propiedades/PropietyCard";
import { usePropertyStore } from "../store/propertyStore";

export default function PropertyFound() {
    const { searchResults } = usePropertyStore()
    return (
        <div className="bg-zinc-500/50">

            <div className="max-w-5xl mx-auto py-5 px-4">
                <h2 className="text-white text-lg font-semibold mb-6">BUSCANDO: </h2>
                {searchResults.length > 0 ? <PropietyCard />
                    : (<div className="flex justify-center">
                        <p className="text-white" >No se encontraron coincidencias en la búsqueda </p> <TbMoodSadSquint size={25} color="white"/>

                    </div> )}
            </div></div>

    )
}
