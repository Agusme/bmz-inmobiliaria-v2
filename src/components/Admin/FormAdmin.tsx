import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { propertySchema } from "./formSchema";

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
    
    const { register, handleSubmit, reset, formState: { errors, dirtyFields } } = useForm<FormData>({resolver: yupResolver(propertySchema)});
    
    
    const inputClass=(fieldName: keyof FormData)=>{
        const error = errors[fieldName];
        const dirty= dirtyFields[fieldName];
        return dirty? error? 'border-red-500': 'border-green-500':''
    
    }

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
                        className={`select w-full ${inputClass('typeProperty') }`}
                    >
                        <span className="label">Tipo de Propiedad</span>
                        <select id="typeProperty" defaultValue="" {...register('typeProperty')}
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
                    <label className={`select w-full ${inputClass('typeTransaction') }`} >
                        <span className="label">Tipo de Transacción</span>
                        <select defaultValue="" {...register('typeTransaction')}>
                            <option disabled value="">Seleccionar</option>
                            <option value="venta" >Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </label>
                    {errors.typeTransaction && (<p className="text-red-500 mt-1 text-sm">{errors.typeTransaction.message} </p>)}
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className={`select w-full ${inputClass('bathroom') }`} >
                        <span className="label">Baños</span>
                        <select defaultValue='' {...register('bathroom')}>
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
                    <label className={`select w-full ${inputClass('bedroom') } `} >
                        <span className="label">Dormitorios</span>
                        <select defaultValue='' {...register('bedroom')}
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
                     <label className={`select w-full ${inputClass('destacada') }`} >
                        <span className="label">Destacada</span>
                        <select defaultValue='' {...register('destacada')}>
                            <option disabled value='' >Seleccionar</option>
                            <option value='true'>Si</option>
                            <option value='false'>No</option>
                        </select>
                    </label>
                    {errors.destacada && (<p className="text-red-500 mt-1 text-sm">{errors.destacada.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                       <label className={`select w-full ${inputClass('location') } `} >
                        <span className="label">Localidad</span>
                        <input type="text" placeholder="Ej: Yerba Buena" {...register('location')} />
                    </label>
                    {errors.location && (<p className="text-red-500 mt-1 text-sm">{errors.location.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                     <label className={`select w-full ${inputClass('map') } `} >
                        <span className="label">Mapa</span>
                        <input type="text" placeholder="URL" {...register('map')} />
                    </label>
                    {errors.map && (<p className="text-red-500 mt-1 text-sm">{errors.map.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                    <input type="file" multiple    className={`file-input w-full ${inputClass('images') }`} {...register('images')} />
                    {errors.images && (<p className="text-red-500 mt-1 text-sm">{errors.images.message} </p>)}

                </div>
                <div className="col-span-2 md:col-span-1">

                    <textarea    className={`textarea w-full ${inputClass('typeProperty') } `} placeholder="Describe la propiedad..." {...register('description')} ></textarea>
                    {errors.description && (<p className="text-red-500 mt-1 text-sm">{errors.description.message} </p>)}
                </div>
                <div className="flex justify-end md:col-start-2">
                    <button className="btn px-10 btn-neutral btn-outline" type="submit"> Guardar</button>
                </div>
            </form>
        </div>
    )
}
