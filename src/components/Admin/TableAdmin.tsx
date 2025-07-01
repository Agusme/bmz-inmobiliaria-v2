/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import { usePropertyStore } from "../../store/propertyStore"
import { FaEdit, FaTrash } from "react-icons/fa"
import { Property } from "../../types/PropertyTypes"
import EditProperty from "./EditProperty"

export default function TableAdmin() {

  const { propiedades, loading, fetchProperties, deleteProperty } = usePropertyStore()
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState<Property | null>(null)

  /* useref para abrir modal en typescript  */
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const abrirModal = (prop: Property) => {
    setPropiedadSeleccionada(prop)
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

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
                  <button className="btn" onClick={() => deleteProperty(prop._id)}>
                    <FaTrash size={20} />
                  </button>
                  <button onClick={() => abrirModal(prop)} className="btn">
                    <FaEdit size={20} />
                  </button>
                </div>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
      {/* Modal de editar */}
      <dialog ref={modalRef} className="modal">
        {propiedadSeleccionada && <EditProperty propiedad={propiedadSeleccionada} onClose={() => modalRef.current?.close()} />
        }      </dialog>
    </div>
  )
}
