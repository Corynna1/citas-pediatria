import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"



function App() {
 

  return (
    <div className="container mx-auto mt-20">
    <Header/>

    <div className="mt-20 md:flex">
    <Formulario/>
    <ListadoPacientes/>
    </div>
    </div>
  )
}

export default App

//container:
//mx:margen de izquierda a a derecha
//my:margen de arriba abajo
//mt:margin-top
//mb:margin-buttom
//ml:margin-left
//mr:margin-rigth
//mx-auto:

