import { useState  , useEffect} from 'react'

function Formulario({pacientes , setPacientes , paciente , setPaciente}) {
  const [nombre , setNombre] = useState('')
  const [propietario , setPropietario] = useState('')
  const [email , setEmail] = useState('')
  const [fecha , setFecha] = useState('')
  const [sintomas , setSintomas] = useState('')
  const [error , setError] = useState(false)
  const generarId = () => {
    let random = Math.random().toString(36).substring(2)
    let fecha = Date.now().toString(36)

    return random + fecha
  }

  
  
  useEffect(() => {

      console.log('8797');
      if (Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)
        setEmail(paciente.email)
        setPropietario(paciente.propietario)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)    
      }
  
    
  }, [paciente])
  

  function handleSubmit (e){
    e.preventDefault()
    if( [nombre , propietario , email , fecha , sintomas].includes('')){
      console.log('existe un error');
      return setError(true)
    }

    setError(false)
    let data = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id : generarId()

    }
    if( paciente.id){
      console.log(paciente.id);
      console.log(data.id);
      data.id = paciente.id
      console.log('entramos');
      const ObjActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? data : pacienteState )
      setPacientes(ObjActualizado)
      setPaciente({})

    }else{

      setPacientes([...pacientes,data])
     
    }

    setNombre("")
    setEmail("")
    setPropietario("")
    setFecha("")
    setSintomas("")
    
  }
  
  return (
    <div className="md:w-1/2  lg:w-2/5  mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-10 px-5" onSubmit={handleSubmit}>
        { error && <div className='bg-red-700 text-white font-bold text-center p-5 mb-5 rounded-md'><p>Todos los campos son obligatorios</p></div>}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-600 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="name"
            className="border-2 w-full p-2 mt-2"
            type="text"
            placeholder="ingresa nombre de la mascota"
            value={nombre}
            onChange={ (event) => setNombre(event.target.value)}
          />
        </div>
        <InputTypeText
          classNameDiv='mb-5'
          nameForLabel="propietario"
          childrenLabel="Nombre Propietario"
          classNameLabel="block text-gray-600 uppercase font-bold"
          classNameInput="border-2 w-full p-2 mt-2"
          typeInput="text"
          placeholder="Nombre del propietario"
          id="propietario"
          value={propietario}
            onChange={ (event) => setPropietario(event.target.value)}
        />
        <InputTypeText
          classNameDiv='mb-5'
          nameForLabel="email"
          childrenLabel="Email"
          classNameLabel="block text-gray-600 uppercase font-bold"
          classNameInput="border-2 w-full p-2 mt-2"
          typeInput="text"
          placeholder="Ingresa Email"
          id="email"
          value={email}
          onChange={ (event) => setEmail(event.target.value)}
        />
        <InputTypeText
           classNameDiv='mb-5'
          nameForLabel="alta"
          childrenLabel="Alta"
          classNameLabel="block text-gray-600 uppercase font-bold"
          classNameInput="border-2 w-full p-2 mt-2"
          typeInput="date"
          id="alta"
          value={fecha}
            onChange={ (event) => setFecha(event.target.value)}
        />
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-600 uppercase font-bold"
          >
            Describe los sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (event) => setSintomas(event.target.value)}
          />
        </div>
        <input type="submit" className="bg-indigo-600 w-full mt-2 p-3 text-white uppercase font-bold hover:bg-indigo-300 hover:cursor-pointer" />
      </form>
    </div>
  );
}
export default Formulario;


export const InputTypeText = ({
  classNameDiv,
  typeInput,
  placeholder,
  classNameInput,
  classNameLabel,
  childrenLabel,
  nameForLabel,
  ...props
}) => {
  return (
    <div className={classNameDiv}>
      <label htmlFor={nameForLabel} className={classNameLabel}>
        {childrenLabel}
      </label>
      <input
        type={typeInput}
        placeholder={placeholder}
        className={classNameInput}
        {...props}
      />
    </div>
  );
};