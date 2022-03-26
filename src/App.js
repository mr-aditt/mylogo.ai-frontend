import './App.css';
import Signin from './pages/signin'
import Signup from './pages/signup'
import UserData from './pages/user'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './pages/home';
import { useState, useEffect } from 'react';
import Aboutus from './pages/about-us';

function App() {
  const [isAuthenticate, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const temp = localStorage.getItem("isAuthenticated");
    temp && JSON.parse(temp)?setIsAuthenticated(true):setIsAuthenticated(false)
  },[])

  useEffect(()=>{
    localStorage.setItem("isAuthenticated",isAuthenticate);
  },[isAuthenticate])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/users/signup" element={<Signup authenticate={setIsAuthenticated}/>} />
        <Route path="/users/signin" element={<Signin authenticate={setIsAuthenticated}/>} />
        {isAuthenticate && (<Route path="/users/mylogo" element={<UserData authenticate={setIsAuthenticated}/>} />)}
        <Route path="*" element={<Navigate to={isAuthenticate? "/users/mylogo": "/users/signin" }/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
