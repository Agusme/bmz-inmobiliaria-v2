import Carousel from "../components/Carousel";
import PropiedadesCarousel from "../components/Propiedades/PropiedadesCarousel";
import Search from "../components/Search";
import Contact from "./Contact";
import Nosotros from "./Nosotros";

export default function Home() {
 
  return (
     <div>
     <Carousel/>
     <Search/>
     <Nosotros/>
     <PropiedadesCarousel tipoPropiedad="Departamento" titulo="Departamentos"></PropiedadesCarousel>
     <PropiedadesCarousel tipoPropiedad="Casa" titulo="Casas"></PropiedadesCarousel>
     <PropiedadesCarousel tipoPropiedad="Terreno" titulo="Terrenos"></PropiedadesCarousel>
   <Contact/>
    </div>
  )
}
