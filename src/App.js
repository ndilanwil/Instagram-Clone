import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login/Login"
import {SignUp} from "./pages/SignUp/SignUp"
import {Home} from "./pages/Home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
