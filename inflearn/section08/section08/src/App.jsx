import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'

import { getEmotionImage } from './util/get-emotion-image'


function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  }

  return (
    <>
    <div>
      <img src={getEmotionImage(1)}/>
      <img src={getEmotionImage(2)}/>
      <img src={getEmotionImage(3)}/>
      <img src={getEmotionImage(4)}/>
      <img src={getEmotionImage(5)}/>
    </div>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New 페이지로 이동</button>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/diary/:id' element={<Diary/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
  </>
  )
}

export default App
