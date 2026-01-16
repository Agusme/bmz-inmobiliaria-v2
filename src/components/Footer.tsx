
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import RedesSociales from "./RedesSociales";
export default function Footer() {
  return (
    <>
      <div className="bg-black py-7 text-gray-300">
        <div className="grid grid-cols-1 dm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div>
            <Link to='/'>
              <img src={logo} alt="logo bmz inmobiliaria" className="w-20 mx-auto"  width={80}
  height={80}/>
            </Link>
          </div>
          <div className="text-center mx-auto dm:text-left ">
            <h4 className="font-thin mb-2">Páginas</h4>{" "}
            <ul className="font-thin">
              <li>
              <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-white underline" : "text-gray-300"}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "text-white underline" : "text-gray-300"}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/propiedades"
                  className={({ isActive }) => isActive ? "text-white underline" : "text-gray-300"}
                >
                  Propiedades
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => isActive ? "text-white underline" : "text-gray-300"}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="text-center  mx-auto dm:text-start">
            <h4 className="font-thin mb-2">Nuestras Redes</h4>
        <RedesSociales/>
          </div>
        </div>
        <p className="text-center pt-4 font-thin">© 2025 BMZ Propiedades | MP 111 y 112 | Tucumán, Argentina
          Miembro del Colegio de Corredores Inmobiliarios de Tucumán (CCIT).</p>
      </div>
    </>
  );
}
