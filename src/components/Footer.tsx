import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import logo from '../assets/logo.png'
export default function Footer() {
  return (
      <>
        
      <div className="bg-black py-5 text-white ">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="">
        <img src={logo} alt="logo bmz inmobiliaria" className="w-20 mx-auto" />
      </div>
      <div className="text-center sm:text-left">
        <h4 className="font-bold mb-2">Páginas</h4>{" "}
        <ul>
          <li>Nosotros</li>
          <li>Propiedades</li>
          <li> Contacto</li>
        </ul>
      </div>
      <div className="text-center sm:text-start">
        <h4 className="font-bold mb-2">Nuestras Redes</h4>
        <ul className="flex justify-center sm:justify-start gap-2 text-3xl">
          <li>
            <RiFacebookCircleLine />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaWhatsapp />
          </li>
          <li>
          <FaTiktok />
          </li>
        </ul>
      </div>
    </div>
    <p className="text-center p-2">© 2025 BMZ Propiedades | MP 111 y 112 | Tucumán, Argentina
    Miembro del Colegio de Corredores Inmobiliarios de Tucumán (CCIT).</p>
      </div>
    
    </>
  );
}
