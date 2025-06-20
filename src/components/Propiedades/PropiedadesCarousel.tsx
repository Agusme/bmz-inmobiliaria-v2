import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getProperties } from "../../services/PropertyServices";
import { Property } from "../../types/PropertyTypes";


export default function PropiedadesCarousel({ tipoPropiedad = 'Tipo de propiedad' }) {

  const [propiedades, setPropiedades] = useState<Property[]>([]);

  const filtrarTipoDePropiedad = async () => {
    try {
      const data = await getProperties();
      const propiedadesFiltradas = data.filter(p => p.typeProperty === tipoPropiedad);
      setPropiedades(propiedadesFiltradas)
      console.log(data)
    } catch (error) {
      console.error('Error al filtrar propiedades', error);
    }
  }

  useEffect(() => {
    filtrarTipoDePropiedad()
  }, [tipoPropiedad]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="container my-5 py-5">
      <h2 className="text-center uppercase text-gray-600 text-2xl">{tipoPropiedad} </h2>
      <div className="border-b-gray-600 w-5  border border-b-2 mx-auto my-3 "></div>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {propiedades.map((p) => (
            <div key={p._id} className="px-2">
              <div className="h-3/4 flex flex-col gap-3 bg-slate-600 rounded-lg">
                <img
                  src={`${p.images[0]}`}
                  alt={p.location} className="rounded-t-xl mx-auto w-full h-60 object-cover"
                />
                <h3 className="text-center mb-1 uppercase h-20 font-medium ">{p.location}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
