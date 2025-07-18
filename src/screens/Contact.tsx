import ContactForm from "../components/Contact/ContactForm"
import ContactoInfo from "../components/Contact/ContactoInfo"

export default function Contact() {
  return (
    <div className="bg-[url('../../src/assets/carrusel/terreno.jpeg')]  bg-cover bg-center flex justify-center items-start p-10 mx-auto px-4">
 <div className="container">
       <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-lg ">
        <ContactForm />
        <ContactoInfo />
      </div>
 </div>
    </div>
  )
}
