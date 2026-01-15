import { getOptimizedCloudinaryUrl } from "../../utils/cloudinary";
import { BiSolidBath } from "react-icons/bi";
import { usePropertyStore } from "../../store/propertyStore";
import { IoMdBed } from "react-icons/io";
import { Link } from "react-router-dom";

export default function PropietyCard() {
        const {searchResults}= usePropertyStore()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
      {searchResults.map((p) => (
        
      <Link to={`/property/${p._id}`} key={p._id}>
        <div key={p._id} className="mb-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] rounded-lg  overflow-hidden bg-white">
          <div className="relative">
            <a
              href={`https://wa.me/5491123456789?text=${encodeURIComponent(
                `Hola, estoy interesada en la propiedad ubicada en ${p.location}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-yellow-400 absolute top-56 right-2 text-xs px-4 py-2 uppercase shadow-2xl rounded-3xl"
            >
              consultar precio
            </a>
          </div>
          <img
            src={getOptimizedCloudinaryUrl(p.images[0], 400, 240)}
            alt={p.location}
            className=" mx-auto w-full h-60 object-cover"
            width={400} // Asumiendo un ancho de 400px para la tarjeta
            height={240}
          />
          <div className="px-2 pt-6 pb-2 text-sm uppercase text-zinc-500">
            <p>{p.description.length > 27 ? `${p.description.slice(0, 27)}...` : p.description}</p>
            <h3 className="mb-1 h-12 font-medium">{p.location}</h3>
            <div className="flex">
             {p.typeProperty !== "Terreno"? ( <><p className="flex text-xs me-5">{p.bathroom} <BiSolidBath size={15} /></p>
              <p className="flex text-xs">{p.bedroom} <IoMdBed size={17} /></p></>) : null }
            </div>
          </div>
          
        </div>
      </Link>
      ))}
    </div>
  )
}
