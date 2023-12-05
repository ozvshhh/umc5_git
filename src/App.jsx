import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Celebirity} from "./pages/Celebirity";
import {Home} from "./pages/Home";
import {Movies} from "./pages/movies";
import {TV} from "./pages/TV";
import {NotFound} from "./pages/NotFound";
import { Detail } from "./pages/Detail";
import { Login } from "./pages/Login";
import { Weather } from "./pages/weather";

import{Header} from "./components/Header"

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Header>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/celebirity" element={<Celebirity/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/tv" element={<TV/>}/>
          <Route path="/detail/*" element={<Detail/>}/>
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path ="/weather" element={<Weather></Weather>}></Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    <></>
    </div>
  );
}

export default App;