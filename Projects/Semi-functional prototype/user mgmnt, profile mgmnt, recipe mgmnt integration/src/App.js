import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import { useLocation} from "react-router-dom";
import DisplayProfilepage from './Components/DisplayProfile/DisplayProfilepage';
import UpdateRecipePage from './Components/UpdateRecipe/UpdateRecipePage';
import FeedPage from './Components/Feed/FeedPage';
import AddRecipePage from './Components/AddRecipe/AddRecipePage';
import Profile from './Components/Form/Profile';
import { ForgotPassword } from "./Components/User Management/ForgotPassword";
import { Signup } from "./Components/User Management/Signup";
import { SecurityQuestion } from "./Components/User Management/SecurityQuestion";
import { NewPassword } from "./Components/User Management/NewPassword";
import { Login } from "./Components/User Management/Login";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/forgotpassword' || location.pathname === '/security-question' || location.pathname === '/new-password'? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/security-question" element={<SecurityQuestion />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path='/feed' element={<FeedPage />} />
        <Route path='/profilepage' element={<DisplayProfilepage />} />
        <Route path='/updateRecipe' element={<UpdateRecipePage />} />
        <Route path='/addRecipe' element={<AddRecipePage />} />
        <Route path='/updateProfile' element={<Profile />} />


      </Routes>
    </div>

  );
}

export default App;
