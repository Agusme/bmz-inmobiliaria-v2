import { useForm } from "react-hook-form"

type FormData = {
    typeProperty: string,
    typeTransaction: string,
    bathroom: number,
    bedroom: number,
    destacada: string,
    location: string,
    description: string,
    map: string,
    images: FileList
}

export default function FormAdmin() {

    const { register, handleSubmit, reset, formState: { errors, dirtyFields } } = useForm<FormData>()
    

    const onSubmit = (data: FormData) => {
        const parsedData = {
            ...data,
            destacada: data.destacada === 'true',
        }
        console.log('formulario enviado', parsedData)
        reset()
    }

    return (
        <div className="bg-slate-700 bg-opacity-10 rounded-lg">
            <form className="p-10 grid  md:grid-cols-2 gap-x-10 gap-y-5 mx-auto max-w-6xl" onSubmit={handleSubmit(onSubmit)} >
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="typeProperty"
                        className={`select w-full ${dirtyFields.typeProperty
                                ? errors.typeProperty
                                    ? 'border-red-500 focus:border-red-500'
                                    : 'border-green-500'
                                : ''
                            }`}
                    >
                        <span className="label">Tipo de Propiedad</span>
                        <select id="typeProperty" defaultValue="" {...register('typeProperty', { required: 'Seleccione una opción' })}
                        >
                            <option disabled value="">Seleccionar</option>
                            <option value="casa">Casa</option>
                            <option value="departamento">Departamento</option>
                            <option value="terreno">Terreno</option>
                            <option value="local">Local</option>
                        </select>
                    </label>
                    {errors.typeProperty && (<p className="text-red-500 mt-1 text-sm"> {errors.typeProperty.message} </p>)}
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className={`select w-full ${dirtyFields.typeTransaction ? errors.typeTransaction ? 'border-red-500 focus:border-red-500' : 'border-green-500' : ''} `} >
                        <span className="label">Tipo de Transacción</span>
                        <select defaultValue="" {...register('typeTransaction', { required: 'Seleccione una opcion' })}>
                            <option disabled value="">Seleccionar</option>
                            <option value="venta" >Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </label>
                    {errors.typeTransaction && (<p className="text-red-500 mt-1 text-sm">{errors.typeTransaction.message} </p>)}
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className={`select w-full ${dirtyFields.bathroom ? errors.bathroom ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} >
                        <span className="label">Baños</span>
                        <select defaultValue='' {...register('bathroom', { required: 'Seleccione la cantidad de baños',   valueAsNumber: true})}>
                            <option value="" disabled>Seleccionar</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>
                    </label>
                    {errors.bathroom && (<p className="text-red-500 mt-1 text-sm">{errors.bathroom.message} </p>)}
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className={`select w-full ${dirtyFields.bedroom? errors.bedroom ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} >
                        <span className="label">Dormitorios</span>
                        <select defaultValue='' {...register('bedroom', { required: 'Seleccione cantidad de dormitorios' , valueAsNumber:true})}
                        ><option disabled value="">Seleccionar</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>
                    </label>                                    {errors.bedroom && (<p className="text-red-500 mt-1 text-sm">{errors.bedroom.message} </p>)}
                </div>
                <div className="col-span-2 md:col-span-1">
                     <label className={`select w-full ${dirtyFields.destacada? errors.destacada ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} >
                        <span className="label">Destacada</span>
                        <select defaultValue='' {...register('destacada', { required: 'Seleccione una opcion' })}>
                            <option disabled value='' >Seleccionar</option>
                            <option value='true'>Si</option>
                            <option value='false'>No</option>
                        </select>
                    </label>
                    {errors.destacada && (<p className="text-red-500 mt-1 text-sm">{errors.destacada.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                       <label className={`select w-full ${dirtyFields.location ? errors.location  ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} >
                        <span className="label">Localidad</span>
                        <input type="text" placeholder="Ej: Yerba Buena" {...register('location', { required: 'Indique la localidad', maxLength: 50, minLength: 5 })} />
                    </label>
                    {errors.location && (<p className="text-red-500 mt-1 text-sm">{errors.location.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                     <label className={`select w-full ${dirtyFields.map? errors.map ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} >
                        <span className="label">Mapa</span>
                        <input type="text" placeholder="URL" {...register('map', { required: 'Ingrese la URL del mapa' })} />
                    </label>
                    {errors.map && (<p className="text-red-500 mt-1 text-sm">{errors.map.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                    <input type="file" multiple    className={`file-input w-full ${dirtyFields.images? errors.images ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} {...register('images', { required: 'Ingrese las imágenes' })} />
                    {errors.images && (<p className="text-red-500 mt-1 text-sm">{errors.images.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                    <textarea    className={`textarea w-full ${dirtyFields.description? errors.description ? 'border-red-500 focus:border-red-500': 'border-green-500': ''} `} placeholder="Describe la propiedad..." {...register('description', { required: 'Describe la propiedad', maxLength: { 'value': 500, 'message': 'El máximo de caracteres es 500.' }, minLength: { value: 5, message: 'El mínimo de caracteres es 5' } })} ></textarea>
                    {errors.description && (<p className="text-red-500 mt-1 text-sm">{errors.description.message} </p>)}

                </div>

                <div className="flex justify-end md:col-start-2">
                    <button className="btn px-10 btn-neutral btn-outline" > Guardar</button>
                </div>
            </form>
        </div>
    )
}
