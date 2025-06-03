import CountUp from 'react-countup';

const Nosotros = () => {
    return (


        <div className="bg-[url('/Fondo.jpeg')] bg-cover bg-center flex justify-center items-start p-10 md:p-24 ">
            <div className="bg-white bg-opacity-90  shadow-lg p-8  w-full rounded-lg">
                <h1 className="text-3xl  mb-6 uppercase font-thin">
                    Conocé BMZ Propiedades: <strong className=' text-red-800'>Inmobiliaria de confianza en Tucumán</strong>
                </h1>
                <p>
                    Somos una <strong>
                        inmobiliaria de confianza en Tucumán</strong> con más de 30 años de experiencia en el mercado inmobiliario. Nuestro equipo altamente capacitado está aquí para ayudarte en la compra, venta y alquier de propiedades. Brindamos un servicio profesional y personalizado para hacer realidad tus objetivos inmobiliarios.
                </p>
                <h2 className='text-xl font-semibold my-2'>Expertos en bienes de raices</h2>
                <p>Nos esforzamos por ofrecer un servicio excepcional a cada uno de nuestros clientes.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-8 '>
                   <div>
                   <div className='flex justify-center'>
                        <p className='font-bold  text-red-800 text-4xl'> + </p>
                        <CountUp
                            end={30}
                            duration={10}
                            className="font-bold  text-red-800 text-4xl"
                        />
                    </div>
                    <p className='text-center'>Años de experiencia</p>
                   </div>
                   <div>
                   <div className='flex justify-center'>
                        <p className='font-bold  text-red-800 text-4xl'> + </p>
                        <CountUp
                            end={1500}
                            duration={5}
                            className="font-bold  text-red-800 text-4xl"
                        />
                    </div>
                    <p className='text-center'>Propiedades vendidas</p>
                   </div>
                   <div>
                   <div className='flex justify-center'>
                        <p className='font-bold  text-red-800 text-4xl'> + </p>
                        <CountUp
                            end={3000}
                            duration={5}
                            className="font-bold  text-red-800 text-4xl"
                        />
                    </div>
                    <p className='text-center'>Clientes felices</p>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Nosotros;