import { Link } from 'react-router-dom'
import logoNegro from '../assets/logoNegro.png'
export default function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="hover:underline">
                    <img src={logoNegro} alt="" className='w-20' />

                </Link>
            </div>
            <div className="flex-none hidden lg:flex uppercase font-semibold">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Nosotros</a></li>
                    <li><a>Propiedades</a></li>
                    <li><a>Servicios</a></li>
                    <li> <Link to="/contacto" className="hover:underline">
                        Contacto
                    </Link></li>
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
                    <ul className="uppercase  font-semibold dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Nosotros</a></li>
                        <li><a>Propiedades</a></li>
                        <li><a>Servicios</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
