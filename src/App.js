import "./App.css";

import Login from "./Components/LoginSign/Login";
import Signup from "./Components/LoginSign/Signup";
import Homepage from "./Components/Home/Homepage"
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App" bg="#ffffff">
       <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signUp" element={<Signup/>}/>
    <Route path="/" element={<Homepage/>}/>
</Routes>
    </div>
  );
}

export default App;






