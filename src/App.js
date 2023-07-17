import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useState, useEffect} from "react"
import {Login} from "./pages/Login/Login"
import {SignUp} from "./pages/SignUp/SignUp"
import {Home} from "./pages/Home/Home"
import {Settings} from "./pages/Settings/Settings"
import {Profile} from "./pages/Profile/Profile"

function App() {
  const [authed, setAuthed] = useState(true);
  useEffect(() => {
    let test = localStorage.getItem("user");
    console.log(test);
    if(test===null){
      setAuthed(false);
    }
  }, []);
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={authed ? <Home /> : <Navigate to="/login" />} />
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
