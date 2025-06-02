import { Route, Routes } from 'react-router'
import './App.css'
import { Signup, Login, Homepage, Dashboard, VerifyOtp, Recoveracc, CnPass, } from './component'
// import VerifyOtp from "./component/pages/Login_page/Forgot_password/verify_otp"
// import Recoveracc from './component/pages/Login_page/Forgot_password/Recoveracc'
// import CnPass from "./component/pages/Login_page/Forgot_password/create_new_password"


function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Recoveracc' element={<Recoveracc />} />
      <Route path='/VerifyOtp' element={<VerifyOtp />} />
      <Route path='/CnPass' element={<CnPass />} />


      {/* <Route path='/verifyOtp' element={<verifyOtp />}> */}



    </Routes >
  )
}

export default App
