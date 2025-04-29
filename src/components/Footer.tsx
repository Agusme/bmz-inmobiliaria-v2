import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="bg-black py-7 text-white ">
        <div className="grid grid-cols-1 dm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div>
            <Link to='/'>
              <img src={logo} alt="logo bmz inmobiliaria" className="w-20 mx-auto" />
            </Link>
          </div>
          <div className="text-center mx-auto dm:text-left">
            <h4 className="font-bold mb-2">Páginas</h4>{" "}
            <ul>
              <li>
              <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/propiedades"
                  className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}
                >
                  Propiedades
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center  mx-auto dm:text-start">
            <h4 className="font-bold mb-2">Nuestras Redes</h4>
            <ul className="flex justify-center dm:justify-start gap-2 text-3xl">
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
        <p className="text-center pt-4">© 2025 BMZ Propiedades | MP 111 y 112 | Tucumán, Argentina
          Miembro del Colegio de Corredores Inmobiliarios de Tucumán (CCIT).</p>
      </div>
    </>
  );
}
