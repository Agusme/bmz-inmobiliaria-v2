import ContactForm from "../components/Contact/ContactForm"
import ContactoInfo from "../components/Contact/ContactoInfo"

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <ContactForm />
        <ContactoInfo />
      </div>

    </div>
  )
}
