import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import Edit from './pages/Edit'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import { getEmotionImage } from './util/get-emotion-image'
import Header from './components/Header'

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/diary/:id' element={<Diary/>}/>
    <Route path="/Edit" element={<Edit/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  </>
  )
}

export default App
