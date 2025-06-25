import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/diary' element={<Diary/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  )
}

export default App
