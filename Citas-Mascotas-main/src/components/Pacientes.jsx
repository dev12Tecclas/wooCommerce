import React from 'react'

function Pacientes( {paciente , setPaciente , eliminarPaciente}) {
  console.log(paciente);

const {nombre , propietario , id ,fecha , sintomas , email  } = paciente

  const handlerRemove = () => {
    let result = confirm("deseas eliminar este elemento?")
    if (result) {
    eliminarPaciente(id)
    }
  }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold text-gray-700 uppercase">
      nombre: <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      Propietario <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      Email <span className="font-normal normal-case">{email}</span>
    </p>

    <p className="font-bold text-gray-700 uppercase">
      alta: <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold text-gray-700 uppercase">
      sintomas: <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div>
      <button className='py-2 px-10 bg-indigo-600 text-white font-bold rounded-lg uppercase hover:bg-indigo-400 mr-1 my-2' onClick={()=> setPaciente({ id ,nombre , propietario , email , fecha , sintomas })} >editar</button>
      <button className='py-2 px-10 bg-red-600 text-w font-bold rounded-lg uppercase hover:bg-red-400 text-white' onClick={handlerRemove}>eliminar</button>
    </div>
  </div>
  )
}

export default Pacientes