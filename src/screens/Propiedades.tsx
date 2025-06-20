import PropiedadesCarousel from "../components/Propiedades/PropiedadesCarousel";

export default function Propiedades() {
  return (
    <div>
      <PropiedadesCarousel tipoPropiedad="Departamento"></PropiedadesCarousel>
      <PropiedadesCarousel tipoPropiedad="Casas"></PropiedadesCarousel>
    </div>
  )
}
