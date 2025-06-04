
type FormData = {
  typeProperty : string,
  typeTransaction: string,
  bathroom: number,
  bedroom: number,
  location: string,
  description: string,
  map: string,
 images: string[];  
}

export default function FormAdmin() {

    return (
        <div className="bg-slate-700 bg-opacity-10 rounded-lg">
            <form className="p-10 grid  md:grid-cols-2 gap-x-10 gap-y-5 mx-auto max-w-6xl">
                <label className="select w-full  " >
                    <span className="label">Tipo de Propiedad</span>
                    <select>
                        <option>Casa</option>
                        <option>Departamento</option>
                        <option>Terreno</option>
                        <option>Local</option>
                    </select>
                </label>
                <label className="select w-full ">
                    <span className="label">Tipo de Transacción</span>
                    <select>
                        <option>Venta</option>
                        <option>Alquiler</option>
                    </select>
                </label>
                <label className="select w-full">
                    <span className="label">Baños</span>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </label>
                <label className="select  w-full">
                    <span className="label ">Dormitorios</span>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </label>
                <label className="input w-full ">
                    <span className="label">Localidad</span>
                    <input type="text" placeholder="Ej: Yerba Buena" />
                </label>
                <label className="input w-full ">
                    <span className="label">Mapa</span>
                    <input type="text" placeholder="URL" />
                </label>
                <textarea className="textarea w-full" placeholder="Describe la propiedad..."></textarea>
                <input type="file" className="file-input w-full" />
                <div className="flex justify-end md:col-start-2">
                                    <button className="btn px-10 btn-neutral btn-outline "> Guardar</button>
                </div>
            </form>
        </div>
    )
}
