import React from "react";
import Pacientes from "./Pacientes";

const ListadoPacientes = ( {pacientes , setPaciente , eliminarPaciente}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-5" >
      <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
      </p>
      {pacientes.length ? pacientes.map( (pacientes ) => {
        return(
          <Pacientes  
          key={pacientes.id}
          paciente={pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        )
      }): <p className="text-red-700 bg-white font-bold text-center">Debes registrar un paciente </p>}
     
    </div>
  );
};

export default ListadoPacientes;
