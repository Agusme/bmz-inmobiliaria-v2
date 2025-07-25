import { useForm } from "react-hook-form"
import { LoginTypes } from "../types/FormLoginTypes"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginTypes>()
    const { login } = useAuthStore()
    const navigate = useNavigate()
    const onSubmit = (data: LoginTypes) => {
        console.log(data)
        if (data.userName === import.meta.env.VITE_USERNAME_ADMIN && data.password === import.meta.env.VITE_PASSWORD_ADMIN) {
            login()
            navigate('/admin')
        } else {
            alert('credenciales incorrectas')
        }
        reset()
    }

    return (
        <div className="relative bg-[url('/terreno.jpeg')] bg-cover  min-h-[80vh] lg:h-screen">
            <div className="bg-black/60  min-h-[80vh] lg:h-screen flex justify-center items-center p-10">
                <div className="bg-white rounded-lg w-full max-w-xl p-6">
                    <div className="avatar avatar-placeholder flex justify-center items-center">
                        <div className="bg-neutral text-neutral-content w-16 rounded-full">
                            <span className="text-xs">ADMIN</span>
                        </div>
                    </div>
                    <form className="flex flex-col items-center gap-4 my-4" onSubmit={handleSubmit(onSubmit)}>
                        <label className="input w-full mx-auto">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                type="text"
                                placeholder="Usuario"
                                required
                                {...register('userName', { required: 'Este campo es obligatorio' })}
                            />
                            {errors.userName && <p className="text-red-500 text-sm"> {errors.userName.message} </p>}

                        </label>
                        <label className="input w-full mx-auto">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                type="password"
                                required
                                placeholder="Contraseña"
                                {...register('password', { required: 'El campo es obligatorio' })}
                            />
                            {errors.password && <p className="text-red-500 text-sm"> {errors.password.message} </p>}
                        </label>
                        <button className="btn btn-active w-40">Entrar</button>
                    </form>

                </div>

            </div>

        </div>
    )
}
