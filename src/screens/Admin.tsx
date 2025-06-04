import { IoHappyOutline } from "react-icons/io5";
import FormAdmin from "../components/Admin/FormAdmin";



export default function Admin() {
    return (
        <div className="container mx-auto px-10 py-2">
            <h1 className="text-3xl text-center uppercase">Pagina de Admin</h1>
          <div className="flex gap-4 items-center justify-center my-5">
             <p>Cargá la propiedad </p>
            <IoHappyOutline size={30}/>
          </div>
            <div className="border border-b-0"></div>
<FormAdmin/>
        </div>
    )
}
