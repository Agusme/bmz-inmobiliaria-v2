/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getProperties } from "../../services/PropertyServices";
import { Property } from "../../types/PropertyTypes";


export default function PropiedadesCarousel({ tipoPropiedad = 'Tipo de propiedad', titulo = 'titulo' }) {

  const [propiedades, setPropiedades] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true)

  const filtrarTipoDePropiedad = async () => {
    try {
      const data = await getProperties();
      const propiedadesFiltradas = data.filter(p => p.typeProperty === tipoPropiedad);
      setPropiedades(propiedadesFiltradas)
      setLoading(true);
    } catch (error) {
      console.error('Error al filtrar propiedades', error);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    filtrarTipoDePropiedad()
  }, [tipoPropiedad]);

  const settings = {
    dots: true,
    infinite: propiedades.length > 1,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
    <div className="container my-5 py-5">
      <h2 className="text-center uppercase font-semibold text-gray-600 text-2xl">{titulo} </h2>
      <div className="border-b-gray-600 w-5  border border-b-2 mx-auto my-3  "></div>
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
          {propiedades.map((p) => (
            <div key={p._id} className="px-2">
              <div className=" transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <a
                    href={`https://wa.me/5491123456789?text=${encodeURIComponent(
                      `Hola, estoy interesada en la propiedad ubicada en ${p.location}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning absolute top-56 right-2 text-xs px-4 py-2 uppercase shadow-2xl text-black rounded-3xl"
                  >
                    consultar precio
                  </a>
                </div>
                <img
                  src={p.images[0]}
                  alt={p.location}
                  className="rounded-t-xl mx-auto w-full h-60 object-cover"
                />
                <div className="p-2 mt-4">
                  <p className="uppercase text-sm">{p.description.length > 27 ? `${p.description.slice(0, 27)}...` : p.description} </p>
                  <h3 className="mb-1 uppercase h-20 font-medium text-sm">{p.location}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>}

      </div>
    </div>
  )
}
