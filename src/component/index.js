import Signup from "./pages/Sign_up"
import Login from "./pages/Login_page"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
// import { Recpsw } from './pages/Login_page/Forgot_password/'
import Recoveracc from "./pages/Login_page/Forgot_password/Recoveracc"
import VerifyOtp from "./pages/Login_page/Forgot_password/verify_otp"
import CnPass from "./pages/Login_page/Forgot_password/create_new_password"


export {
  //pages
  Signup,
  Login,
  // Recpsw,
  Recoveracc,
  VerifyOtp,
  CnPass,
  //It is use when user is in logout state
  Homepage,
  // use when user have login account;
  Dashboard,
}


