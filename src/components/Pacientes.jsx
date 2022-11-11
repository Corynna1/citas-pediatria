import React from 'react'

const Pacientes = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Nombre: {''}
          <span className='font-normal normal-case'>Arely</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Tutor: {''}
          <span className='font-normal normal-case'>Perla</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Email: {''}
          <span className='font-normal normal-case'>coryehn@gmail.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Fecha Alta: {''}
          <span className='font-normal normal-case'>10/12/22</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase '>Sintomas: {''}
          <span className='font-normal normal-case'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eveniet cumque optio consequuntur facere voluptatibus a tempore quis quaerat omnis minima totam provident quo, ipsam doloribus natus cum magnam sequi.</span>
        </p>
      </div>
  )
}

export default Pacientes