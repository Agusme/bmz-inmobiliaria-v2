
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
                    <input type="text" className="mt-2 input w-full  validator" placeholder="Nombre y Apellido" required minLength={3} maxLength={30} title="Debe tener entre 3 y 30 caracteres"

                    />
                    <p className="validator-hint">
                        Debe tener entre 3 y 30 caracteres</p>
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Celular : </label>
                    <input type="tel" className="mt-2 input w-full validator tabular-nums" placeholder="3815633407" minLength={10} maxLength={10} required title="Tienen que ser 10 dígitos" pattern="\d{10}" inputMode="numeric" />
                    <p className="validator-hint">Tiene que ser 10 dígitos</p>
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Consulta: </label>
                    <textarea className="mt-2 input validator w-full" placeholder="Hola! Buenos dias! Estoy buscando..." minLength={5}
                        maxLength={300}
                        title="Debe tener entre 5 y 300 caracteres" required />
                    <p className="validator-hint"  >Debe tener entre 5 y 300 caracteres</p>
                </div>
                <div className="flex justify-end">
                    <button className="btn text-white bg-red-800 w-1/3">Enviar</button>
                </div>
            </form>
        </div>
    )
}
