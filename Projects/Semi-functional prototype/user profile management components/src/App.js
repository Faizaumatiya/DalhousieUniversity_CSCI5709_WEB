
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import DisplayProfilepage from './components/DisplayProfile/DisplayProfilepage'
import Profile from './components/Form/Profile';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<DisplayProfilepage />} />
        {/* <Route path='/updateProfile' element={<UpdateProfile />} /> */}
        <Route path='/updateProfile' element={<Profile />} />
        <Route path='/displayProfile' element={<DisplayProfilepage />} />
      </Routes>
    </div>
  );
}

export default App;
