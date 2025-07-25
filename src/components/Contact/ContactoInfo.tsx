import { useState } from "react";
import RedesSociales from "../RedesSociales";

export default function ContactoInfo() {


const [loading, setLoading]= useState(true)



    return (
        <div className=" p-5">
            <h2 className="uppercase text-center text-xl text-red-800">contáctanos</h2>
            <div className="text-gray-300 my-5 border-y py-10 mx-auto h-40">
                <p className="text-black ">En BMZ Propiedades, hacemos de tu búsqueda una experiencia simple, clara y confiable.</p>
                <RedesSociales iconColor="text-slate-900" />
            </div>
            <div className="relative w-full h-80">
                {loading &&( <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-gray-100 animate-pulse z-10">
                    <p className="text-gray-500 ">Cargando mapa...</p>
                </div>)}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56973.365434146115!2d-65.33655804092838!3d-26.813371131839485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422433a2ee1bffb%3A0xc5d4083eee0d98b1!2sYerba%20Buena%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1748646777377!5m2!1ses!2sar"
                    className="w-full h-80 absolute z-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={()=>setLoading(false)}
                ></iframe>
            </div>

        </div>
    )
}
