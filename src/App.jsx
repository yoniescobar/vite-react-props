import Datos from "./components/Datos"
import ApiUsers from "./components/ApiUsers"

const App = () => {
  
  const nombre = 'Yoni Escobar'
  const edad = 25

  const users = [
    {id: 1, nombre: 'Yoni', edad: 25},
    {id: 2, nombre: 'Escobar', edad: 25},
    {id: 3, nombre: 'Yoni Escobar', edad: 25},
  ]

  const url = 'https://jsonplaceholder.typicode.com/posts'

  return (
    <div>
      
      {/* <Datos nombres={nombre} edad ={edad} users ={users}/> */}
      <br/>
      <ApiUsers url={url}/>
    </div>
  )
}

export default App
