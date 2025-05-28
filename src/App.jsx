import { Route, Routes } from 'react-router'
import './App.css'
import { Signup, Login, Homedasboard } from './component'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Homedasboard />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
