import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login"
import {SignUp} from "./pages/SignUp/SignUp"
import {Home} from "./pages/Home/Home"
import {Settings} from "./pages/Settings/Settings"
import {Profile} from "./pages/Profile/Profile"

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/settings" element={<Settings />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
