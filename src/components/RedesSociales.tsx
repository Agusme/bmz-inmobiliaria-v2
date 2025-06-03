import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function RedesSociales({ iconColor = "text-white", }) {
    return (
        <div>
            <ul className="flex justify-center dm:justify-start gap-2 text-4xl">
                <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
                    <a href="https://www.facebook.com/bmzPropiedades" target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconColor} hover:opacity-70 transition-opacity`}>                <RiFacebookCircleLine />
                    </a>
                </li>
                <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
                    <a href="https://www.instagram.com/bmzpropiedades/" target="_blank"
                        rel="noopener noreferrer" >                <FaInstagram />
                    </a>
                </li>
                <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
                    <a href="https://wa.me/5493815633407" target="_blank"
                        rel="noopener noreferrer" >                                    <FaWhatsapp />

                    </a>
                </li>
                <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
                    <a href="https://www.tiktok.com/@bmzpropiedades" target="_blank"
                        rel="noopener noreferrer" >
                        <FaTiktok />
                    </a>
                </li>
            </ul>

        </div>
    )
}
