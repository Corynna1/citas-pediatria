import React from 'react'

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, tutor, email, fecha, sintomas, id}=paciente

  const handleEliminar = ()=>{
    const respuesta = confirm ('Deseas eliminar este elemento');
    if(respuesta){
      eliminarPaciente(id)
    }
  }

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Nombre: {''}
          <span className='font-normal normal-case'>{nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Tutor: {''}
          <span className='font-normal normal-case'>{tutor}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Email: {''}
          <span className='font-normal normal-case'>{email} </span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Fecha Alta: {''}
          <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Sintomas: {''}
          <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className='flex justify-between mt-10' >
          <button className='py-2 px-10 bg-gradient-to-r from-violet-400 to-blue-500 text-white hover:from-pink-500 hover:to-yellow-500 font-bold uppercase rounded-md'
          onClick={()=>setPaciente(paciente)}>
            Editar
          </button>
          <button className='py-2 px-10 bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-green-400 hover:to-blue-500 font-bold uppercase rounded-md'
          onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Pacientes