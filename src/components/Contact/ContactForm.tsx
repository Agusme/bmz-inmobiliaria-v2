
export default function ContactForm() {
    return (
        <div className="my-4 p-5">
            <h2 className="uppercase text-center text-xl text-red-800">Dejanos tus datos</h2>
            <div className="text-gray-300 my-5 border-y py-10 mx-auto h-40">
                <p className=" text-black">Queremos ayudarte a encontrar la propiedad que estás buscando. Déjanos tus datos para que podamos contactarte y brindarte asesoramiento personalizado a la brevedad.</p>
            </div>
            <form className="grid grid-cols-1 gap-2">
                <div>
                    <label><span className="text-red-800">*</span> Nombre y Apellido: </label>
                    <input type="text" className="mt-2 input w-full" placeholder="Nombre y Apellido" />
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Celular : </label>
                    <input type="number" className="mt-2 input w-full" placeholder="3815633407" />
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Consulta: </label>
                    <textarea className="mt-2 input w-full" placeholder="Hola! Buenos dias! Estoy buscando..." />
                </div>
                <div className="flex justify-end">
                    <button className="btn text-white bg-red-800 w-1/3">Enviar</button>
                </div>
            </form>
        </div>
    )
}
