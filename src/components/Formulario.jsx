import React from "react";
import {useState, useEffect} from 'react'
import Error from "./Error";

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre]= useState('');
  const [tutor, setTutor]= useState('');
  const [email, setEmail]= useState('');
  const [fecha, setFecha]= useState('');
  const [sintomas, setSintomas]= useState('');
  const [error, setError]=useState(false);

  //es la forma de comprobar si hay algo , parecido a if (paciente.length>0)

  useEffect(()=>{
   if (Object.keys(paciente).length>0) {
    setNombre(paciente.nombre)
    setTutor(paciente.tutor)
    setEmail(paciente.email)
    setFecha(paciente.fecha)
    setSintomas(paciente.sintomas)
  }
  },[paciente])//cambia cuando hay un cambio en paciente

  const generarId=()=>{
    const random=Math.random().toString(36)
    const fechaid=Date.now()

    return fechaid+random
  }


  const handleSubmit=(e)=>{
    e.preventDefault();

    //Validacion de formulario
    //includes(): determina si una matriz incluye un determinado elemento, devuelve un true o false segun corresponda

    if([nombre, tutor, email, fecha, sintomas].includes('')){
      console.log('hay al menos un campo vacio')
      setError(true)//inicia error en false, para cuando valide y includes sea vacio el setError cambie a true y se vizualice el mensaje

      return;

    }
    setError(false);

    //Contruir Objeto de Paciente y generar id unico
    const objetoPaciente={
      nombre, 
      tutor, 
      email, 
      fecha, 
      sintomas
    }


    if(paciente.id){
      //editando Pacientes
      objetoPaciente.id= paciente.id

      //.map retorna un arreglo nuevo
      const pacientesActualizados= pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
      
    }else{
      //Nuevo Registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

    //spread operation: metodo inmutable, es para que no mute el valor original de pacientes se utiliza ... para agregar al final es como el push, sin embargio el push()muta el arreglo// sread toma la copia y la agrega al final del arreglo[{}]
   

    //Reiniciar el formulario despues de que se agregue el arreglo
    setNombre('')
    setTutor('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-violet-600 font-bold ">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">


       { error && <Error><p>Todos los campos son Obligatorios</p></Error>}
        <div className="mb-5">
          <label
            htmlFor="boy"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Paciente
          </label>

          <input
            id="boy"
            type="text"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tutor"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Tutor
          </label>

          <input
            id="tutor"
            type="text"
            placeholder="Nombre del Tutor"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tutor}
            onChange={(e)=>setTutor(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email de Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md"
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
          id="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los Síntomas"
          value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
          />
        </div>

        <input
        type='submit'
        className="bg-violet-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}/>
      </form>
    </div>
  );
}

export default Formulario;
