import PropiedadesCarousel from "../components/Propiedades/PropiedadesCarousel";

export default function Propiedades() {
  return (
    <div>
      <PropiedadesCarousel tipoPropiedad="Departamento" titulo='Departamentos'></PropiedadesCarousel>
      <PropiedadesCarousel tipoPropiedad="Casa" titulo='Casas'></PropiedadesCarousel>
      <PropiedadesCarousel tipoPropiedad="Terreno" titulo='Terrenos'></PropiedadesCarousel>
      <PropiedadesCarousel tipoPropiedad="Local" titulo='Locales'></PropiedadesCarousel>
    </div>
  )
}
