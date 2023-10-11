import AddToDo from './components/AddToDo'
import NavBar from './components/NavBar'
import ToDos from './components/ToDos'

import './App.css'

function App() {
  return (
    <main>
  <h2>Todo List</h2>
  <NavBar/>
  <AddToDo/>
  <ToDos/>
  </main>
 )
}

export default App
