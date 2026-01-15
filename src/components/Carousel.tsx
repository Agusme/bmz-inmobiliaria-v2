import Slider from "react-slick";
import terreno from '../assets/carrusel/terreno.webp';
import casa from '../assets/carrusel/casas.webp';
import casas1 from '../assets/carrusel/casas1.webp'
const images = [
    {
        url: terreno,
        description: "terrenos",
    },
    {
        url: casa,
        description: "departamentos",
    },
    {
        url: casas1,
        description: "casas",
    },
];


export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="overflow-hidden border-none">
            <Slider {...settings}>
                {images.map((item, index) => (
                    <div key={index} className="relative">
                        <img
                            src={item.url}
                            alt={item.description}
                            className="w-full h-[350px] object-cover"
                            width={1200} // Asumiendo un ancho máximo de 1200px para el carrusel
                            height={350}
                            fetchPriority="high"
                        />
                        <div className="absolute bottom-10 right-8 text-white uppercase font-semibold bg-black/40 py-2 px-16 ">
                            {item.description}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
