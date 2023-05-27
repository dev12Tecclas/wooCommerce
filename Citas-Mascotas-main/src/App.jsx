import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import FormFormik from "./components/FormularioFormik/FormFormik";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {

    if (!pacientes.length) {
      console.log('entre');
      const obtenerLS = () => {
        const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
        console.log(pacientesLS);
        setPacientes(pacientesLS)
      }
      obtenerLS();
      
    }
  }, []);

  useEffect(() => {
    if (pacientes.length) {
      console.log(pacientes);
      localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      
    }
  }, [pacientes])


  function eliminarPaciente(id) {

    const result = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(result);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        {/* <FormFormik/> */}
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
