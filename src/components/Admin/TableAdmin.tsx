/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { usePropertyStore } from "../../store/propertyStore"
import { FaEdit, FaTrash } from "react-icons/fa"

export default function TableAdmin() {

  const { propiedades, loading, fetchProperties, deleteProperty } = usePropertyStore()


  useEffect(() => { fetchProperties() }, [])

  if (loading) return <p>Cargando propiedades...</p>

  return (
    <div className="container mx-auto p-4 ">
      <div className="overflow-x-auto">
        <table className="table border table-zebra	">
          <thead>
            <tr className="bg-base-300">
              <th>Tipo de Propiedad</th>
              <th>Tipo de Transacción</th>
              <th>Descripción</th>
              <th>Dormitorios</th>
              <th>Baños</th>
              <th>Ubicación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {propiedades.map((prop) => (
              <tr key={prop._id} className="hover:bg-base-300">
                <th>{prop.typeProperty} </th>
                <td>{prop.typeTransaction} </td>
                <td>{prop.location}</td>
                <td>{prop.description}</td>
                <td>{prop.bathroom}</td>
                <td>{prop.bedroom}</td>
                <td><div className="md:flex gap-2" >
                  <button onClick={() => deleteProperty(prop._id)}>
                    <FaTrash size={20} color="red" />
                  </button>
                  <FaEdit size={20} color="green" />
                </div>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
