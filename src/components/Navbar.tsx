import { NavLink } from 'react-router-dom'
import logoNegro from '../assets/logoNegro.png'
export default function Navbar() {
    return (
        <div className="max-w-screen-xl text-gray-600 mx-auto px-4 navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <NavLink to="/" >
                    <img src={logoNegro} alt="" className='w-20' />
                </NavLink>
            </div>
            <div className="flex-none hidden lg:flex uppercase">
                <ul className="menu menu-horizontal  p-0">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "font-semibold text-red-800" : "text-gray-600"}
                    >
                        Inicio
                    </NavLink></li>
                    <li>
                    <NavLink
                        to="/nosotros"
                        className={({ isActive }) => isActive ? "font-semibold text-red-800" : "text-gray-600"}
                    >
                        Nosotros
                    </NavLink></li>

                    <li>
                    <NavLink
                        to="/propiedades"
                        className={({ isActive }) => isActive ? "font-semibold text-red-800" : "text-gray-600"}
                    >
                        Propiedades
                    </NavLink></li>
                    <li><NavLink
                        to="/contacto"
                        className={({ isActive }) => isActive ? "font-semibold text-red-800" : "text-gray-600"}
                    >
                        Contacto
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                    <button className="btn btn-square btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                    <ul className="uppercase  font-thin dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? " text-red-800" : "text-gray-600"}
                    >
                        Inicio
                    </NavLink></li>
                    <li>
                    <NavLink
                        to="/nosotros"
                        className={({ isActive }) => isActive ? " text-red-800" : "text-gray-600"}
                    >
                        Nosotros
                    </NavLink></li>

                    <li>
                    <NavLink
                        to="/propiedades"
                        className={({ isActive }) => isActive ? " text-red-800" : "text-gray-600"}
                    >
                        Propiedades
                    </NavLink></li>
                    <li><NavLink
                        to="/contacto"
                        className={({ isActive }) => isActive ? " text-red-800" : "text-gray-600"}
                    >
                        Contacto
                    </NavLink></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
