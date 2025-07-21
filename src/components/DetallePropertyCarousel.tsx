/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from "react-router-dom"
import { usePropertyStore } from "../store/propertyStore"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function DetallePropertyCarousel() {
    const { id } = useParams()
    const { propiedades } = usePropertyStore()

    const propiedad = propiedades.find((p) => p._id === id)


    return (
        <div className="w-full max-w-2xl mx-auto">
         <Carousel
  showThumbs={true}
 renderThumbs={(_children) =>
  (propiedad?.images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Miniatura ${index + 1}`}
      className="object-cover h-16 w-24 rounded"
    />
  )) ?? [])
}
  showStatus={false}
  infiniteLoop
    showIndicators={false}
  useKeyboardArrows
  autoPlay
  swipeable
  dynamicHeight={false}
  emulateTouch
  className="rounded-lg overflow-hidden"
>
             {propiedad?.images.map((img, index) => (
  <div
    key={index}
    className="my-7 relative h-[400px] w-full overflow-hidden rounded-lg bg-black"
  >
    {/* Imagen difuminada de fondo */}
    <img
      src={img}
      alt="Fondo difuminado"
      className="absolute top-0 left-0 w-full h-full object-cover blur-2xl scale-125"
    />

    {/* Imagen principal centrada */}
    <img
      src={img}
      alt={`Imagen ${index + 1}`}
      className="relative z-10 mx-auto h-full object-contain"
    />
  </div>
))}
            </Carousel>
        </div>
    )
}
