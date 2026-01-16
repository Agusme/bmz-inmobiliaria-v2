import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function RedesSociales({
  iconColor = "text-white",
  iconSize = "text-4xl",
}) {
  return (
    <div>
      <ul className={`flex justify-center dm:justify-start gap-4 ${iconSize}`}>
        <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
          <a
            href="https://www.facebook.com/bmzPropiedades"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconColor} hover:opacity-70 transition-opacity`}
            aria-label="Facebook de BMZ Propiedades"
          >
            {" "}
            <RiFacebookCircleLine />
          </a>
        </li>
        <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
          <a
            href="https://www.instagram.com/bmzpropiedades/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de BMZ Propiedades"
          >
            {" "}
            <FaInstagram />
          </a>
        </li>
        <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
          <a
            href="https://wa.me/5493815633407"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de BMZ Propiedades"
          >
            {" "}
            <FaWhatsapp />
          </a>
        </li>
        <li className={`${iconColor} hover:opacity-70 transition-opacity `}>
          <a
            href="https://www.tiktok.com/@bmzpropiedades"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de BMZ Propiedades"
          >
            <FaTiktok />
          </a>
        </li>
      </ul>
    </div>
  );
}
