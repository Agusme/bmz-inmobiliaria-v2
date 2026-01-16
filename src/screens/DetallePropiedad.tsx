import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { usePropertyStore } from "../store/propertyStore";
import { HiOutlineLocationMarker } from "react-icons/hi";
import BtnConsultarPrecio from "../components/BtnConsultarPrecio";

const LazyDetallePropertyCarousel = lazy(
  () => import("../components/DetallePropertyCarousel")
);
const LazyMap = lazy(
  () => import("../components/Maps/LazyMap")
);

function MapSection({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex justify-center items-center min-h-[300px]"
    >
      {show ? (
        <Suspense fallback={<p>Cargando mapa...</p>}>
          <LazyMap src={src} />
        </Suspense>
      ) : (
        <p className="text-sm text-gray-500">
          El mapa se cargará al hacer scroll
        </p>
      )}
    </div>
  );
}




export default function DetallePropiedad() {
  const { id } = useParams();
  const { propiedades, loading } = usePropertyStore();

  const propiedad = propiedades.find((p) => p._id === id);

  if (!propiedad) return null;

  return (
    <div className="relative bg-[url('/terreno.webp')] bg-cover  min-h-[60vh] ">
      <div className="bg-black/60  min-h-[60vh] p-7 md:px-16">
        <div className="bg-white rounded-lg p-3 md:px-7">
          <h1 className="text-2xl text-center">Detalle de la Propiedad</h1>
          <div>
            <div className="flex">
              <HiOutlineLocationMarker size={25} />
              <h3 className="text-xl ms-1">{propiedad?.location}</h3>
            </div>
            <div className="border-b my-3" />
            <div>
              <Suspense fallback={<div>Cargando Carrusel...</div>}>
                <LazyDetallePropertyCarousel />
              </Suspense>
            </div>
            <div className="border-b my-3" />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <div>
                  <h3>Descripción de la Propiedad</h3>
                  <p className="text-slate-800 text-sm">
                    {propiedad?.description}
                  </p>
                </div>
                <div className="text-end m-4">
                  <BtnConsultarPrecio className="inline-block" />
                </div>
              </div>
              {!loading && propiedad.map && (
              <MapSection src={propiedad.map} />
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
