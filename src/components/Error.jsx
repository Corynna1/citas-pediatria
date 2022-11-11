import {useState, useEffect} from 'react'

const Error = ({children}) => {

    //El children es una palabra reservada de React y este prop hace que todo lo del padre pase hacia el hijo el padre es el componente 
  return (
    <div className="bg-red-800 text-white text-center p-3 uppercase rounded-md mb-3">
   {children}
    
   </div>
  )
}

export default Error