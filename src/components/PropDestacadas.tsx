import React from "react";
import Slider from "react-slick";



export default function PropDestacadas() {
      const settings = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,         // ✅ Cambiado a 1
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: "0px",
};
    return (
        <div className="container my-5">
            <h2 className="text-center uppercase text-gray-600 text-2xl font-thin">Propiedades destacadas</h2>
            <div className="border-b-gray-600 w-1/5  border mx-auto my-5"></div>
   <div className="container my-5">
      <h2 className="text-center uppercase text-gray-600 text-2xl font-thin">
        Propiedades destacadas
      </h2>
      <div className="border-b-gray-600 w-1/5 border mx-auto my-5"></div>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="px-2">
              <h3 className="text-center mb-2">{n}</h3>
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
                alt={`Propiedad ${n}`}
                className="rounded-xl mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
        </div>
    )
}
