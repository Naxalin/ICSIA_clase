import Perfil from './Components/UserList'
import { perfiles } from './datos/perfiles'

function App() {
  return (
    <div>
      
      <Perfil perfiles={perfiles} />
    </div>
  )
}

export default App
