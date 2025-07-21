import { IoHappyOutline } from "react-icons/io5";
import FormAdmin from "../components/Admin/FormAdmin";
import { Link } from "react-router-dom";



export default function Admin() {
  return (
    <div className="container mx-auto px-10 py-2">
      <h1 className="text-3xl text-center uppercase">Pagina de Admin</h1>
      <div className="my-4">
        <p className="flex justify-center items-center gap-2 text-center">
          Cargá la propiedad <IoHappyOutline size={30} />
        </p>
        <div className="my-4 flex justify-end">
          <Link to={'/admin/propiedadesCargadas'}>
            <button className="btn bg-red-800 text-white rounded-lg text-sm">
              Ver Propiedades
            </button>
          </Link>
        </div>

      </div>
      <div className="border border-b-0"></div>
      <FormAdmin />
    </div>
  )
}
