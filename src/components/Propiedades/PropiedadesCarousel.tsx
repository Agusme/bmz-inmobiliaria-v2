/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Slider from "react-slick";
import { BiSolidBath } from "react-icons/bi";
import { IoMdBed } from "react-icons/io";
import { usePropertyStore } from "../../store/propertyStore";
import { Link } from "react-router-dom";
import BtnConsultarPrecio from "../BtnConsultarPrecio";



export default function PropiedadesCarousel({ tipoPropiedad = 'Tipo de propiedad', titulo = 'titulo' }) {

  const { propiedades, loading, fetchProperties } = usePropertyStore()

  useEffect(() => {
    fetchProperties();
  }, []);

  const propiedadesFiltradas = propiedades.filter((prop) => prop.typeProperty === tipoPropiedad)


  const settings = {
    dots: false,
    infinite: propiedadesFiltradas.length > 1,
    speed: 500,
  slidesToShow: Math.min(3, propiedadesFiltradas.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px"
        }
      }
    ]
  };

  return (
    <div className="container my-5 py-5  mx-auto">
      <h2 className="text-center uppercase font-semibold text-zinc-500 text-xl">{titulo} </h2>
      <div className="border-b-zinc-500 w-5  border border-b-2 mx-auto my-3 "></div>
      <div className="max-w-6xl mx-auto px-4">
        {loading ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full">
              <div className="flex flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          ))}
        </div>) : <Slider {...settings}>
          {propiedadesFiltradas.map((p) => (
            <Link to={`/property/${p._id}`} key={p._id}>
              <div key={p._id} className="px-2">
                <div className=" mb-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] rounded-lg overflow-hidden bg-white">
                  <div className="relative">
                    <BtnConsultarPrecio className="absolute top-56 right-2" />
                  </div>
                  <img
                    src={p.images[0]}
                    alt={p.location}
                    className="rounded-t-xl mx-auto w-full h-60 object-cover"
                    width={400} // Asumiendo un ancho de 400px para la tarjeta
                    height={240}
                  />
                  <div className="px-2 pt-6 pb-2 text-sm uppercase text-zinc-500">
                    <p>{p.description.length > 27 ? `${p.description.slice(0, 27)}...` : p.description} </p>
                    <h3 className="mb-1 h-12 font-medium ">{p.location}</h3>
                    {p.typeProperty !== "Terreno" && p.typeProperty !== 'Local' ? <div className="flex">
                      <p className="flex text-xs me-5">{p.bathroom} <BiSolidBath size={15} />
                      </p>
                      <p className="flex text-xs ">{p.bedroom} <IoMdBed size={17} />
                      </p>
                    </div> : null}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>}

      </div>
    </div>
  )
}
