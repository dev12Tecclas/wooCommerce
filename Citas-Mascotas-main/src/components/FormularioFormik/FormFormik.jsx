import React from "react";
import { Form, Formik } from "formik";
function FormFormik() {
  const initialValues = {
    nombre: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
  };
  
  return (
    <div className="md:w-1/2  lg:w-2/5  mx-5 ">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(value , {resetForm}) => {
            console.log(value)
            resetForm()
        }
            
        }
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <Form
              className="bg-white shadow-md rounded-md py-10 px-5"
              onSubmit={handleSubmit}
            >
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
                  value={values.nombre}
                  onChange={handleChange("nombre")}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="propietario"
                  className="block text-gray-600 uppercase font-bold"
                >
                  Propietario
                </label>
                <input
                  placeholder="Nombre del propietario"
                  id="propietario"
                  className="border-2 w-full p-2 mt-2"
                  type="text"
                  value={values.propietario}
                  onChange={handleChange("propietario")}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-gray-600 uppercase font-bold"
                >
                  Email
                </label>
                <input
                  placeholder="Nombre del propietario"
                  id="email"
                  className="border-2 w-full p-2 mt-2"
                  type="text"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="fecha"
                  className="block text-gray-600 uppercase font-bold"
                >
                  Email
                </label>
                <input
                  
                  id="fecha"
                  className="border-2 w-full p-2 mt-2"
                  type="date"
                  value={values.fecha}
                  onChange={handleChange("fecha")}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="sintomas"
                  className="block text-gray-600 uppercase font-bold"
                >
                  Sintomas
                </label>
                <input
                  
                  id="sintomas"
                  className="border-2 w-full p-2 mt-2"
                  type="text"
                  value={values.sintomas}
                  onChange={handleChange("sintomas")}
                />
              </div>

              {/* <InputTypeText
            classNameDiv="mb-5"
            nameForLabel="propietario"
            childrenLabel="Nombre Propietario"
            classNameLabel="block text-gray-600 uppercase font-bold"
            classNameInput="border-2 w-full p-2 mt-2"
            typeInput="text"
            placeholder="Nombre del propietario"
            id="propietario"
            value={propietario}
            onChange={(event) => setPropietario(event.target.value)}
          />
          <InputTypeText
            classNameDiv="mb-5"
            nameForLabel="email"
            childrenLabel="Email"
            classNameLabel="block text-gray-600 uppercase font-bold"
            classNameInput="border-2 w-full p-2 mt-2"
            typeInput="text"
            placeholder="Ingresa Email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputTypeText
            classNameDiv="mb-5"
            nameForLabel="alta"
            childrenLabel="Alta"
            classNameLabel="block text-gray-600 uppercase font-bold"
            classNameInput="border-2 w-full p-2 mt-2"
            typeInput="date"
            id="alta"
            value={fecha}
            onChange={(event) => setFecha(event.target.value)}
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
              onChange={(event) => setSintomas(event.target.value)}
            />
          </div> */}
              <input
                type="submit"
                className="bg-indigo-600 w-full mt-2 p-3 text-white uppercase font-bold hover:bg-indigo-300 hover:cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default FormFormik;
