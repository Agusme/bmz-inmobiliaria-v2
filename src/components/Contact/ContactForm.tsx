import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import CustomButtom from '../custom/CustomButtom';

type FormData = {
    nombre: string;
    celular: string;
    consulta: string;
}

export default function ContactForm() {

    const { register, handleSubmit, formState: { errors, dirtyFields }, reset } = useForm<FormData>()

    const onSubmit = (data: FormData) => {

        emailjs.send('service_n3v74fh', 'template_g7q28lw', {
            nombre: data.nombre, celular: data.celular, consulta: data.consulta
        }, 'BDtEaJzGHui804FZE')
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado',
                    text: 'Gracias por contactarnos.',
                    timer: 3000,

                });
                reset();
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
                    confirmButtonColor: '#d32f2f',
                    timer: 2000,

                });
            });
    }

    return (
        <div className="p-5">
            <h2 className="uppercase text-center text-xl text-red-800">Dejanos tus datos</h2>
            <div className="text-gray-300 my-5 border-y py-10 mx-auto h-40">
                <p className=" text-black">Queremos ayudarte a encontrar la propiedad que estás buscando. Déjanos tus datos para que podamos contactarte y brindarte asesoramiento personalizado a la brevedad.</p>
            </div>
            <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label><span className="text-red-800">*</span> Nombre y Apellido: </label>
                    <input type="text" className={`mt-2 input w-full 
    ${errors.nombre && (dirtyFields.nombre) ? 'border-red-500 focus:border-red-500' :
                            dirtyFields.nombre ? 'border-green-500' : ''}
  `} placeholder="Nombre y Apellido"
                        {...register('nombre', {
                            required: 'Este campo es obligatorio',
                            minLength: {
                                value: 3,
                                message: 'Debe tener como mínimo 3 caracteres'
                            },
                            maxLength: {
                                value: 30,
                                message: 'Debe tener como máximo 30 caracteres'
                            }
                        })}
                    />
                    {errors.nombre && (<p className='text-red-500'>{errors.nombre.message} </p>)}
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Celular : </label>
                    <input type="tel" className={`mt-2 input w-full 
    ${errors.celular && (dirtyFields.celular) ? 'border-red-500 focus:border-red-500' :
                            dirtyFields.celular ? 'border-green-500' : ''}
  `} placeholder="3815633407" title="Tienen que ser 10 dígitos"
                        {...register('celular', {
                            required: 'El número es obligatorio', minLength: { value: 10, message: 'Debe tener exactamente 10 dígitos' }, maxLength: { value: 10, message: 'Debe tener exactamente 10 dígitos' }, pattern: {
                                value: /^\d{10}$/,
                                message: 'Solo se permiten números'
                            },
                        })}
                    />
                    {errors.celular && (
                        <p className='text-red-500'>
                            {errors.celular.message}

                        </p>
                    )}
                </div>
                <div>
                    <label> <span className="text-red-800">*</span> Consulta: </label>
                    <textarea className={`mt-2 input w-full 
    ${errors.consulta && (dirtyFields.consulta) ? 'border-red-500 focus:border-red-500' :
                            dirtyFields.consulta ? 'border-green-500' : ''}
  `} placeholder="Hola! Buenos dias! Estoy buscando..."
                        {...register('consulta', {
                            required: 'La consulta es obligatoria', minLength: {
                                value: 4,
                                message: 'El mínimo de caracteres es 4'
                            },
                            maxLength: { value: 250, message: 'El mínimo de caracteres es 250' }

                        })}

                    />

                    {errors.consulta && (
                        <p className='text-red-500'>{errors.consulta.message}</p>
                    )}


                </div>
                <div className="flex justify-end">
                    <CustomButtom> Enviar</CustomButtom>
                </div>
            </form>
        </div>
    )
}
