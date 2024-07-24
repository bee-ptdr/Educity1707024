import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Program from "./Components/Program/Program"

import About from "./Components/About/About"
import Gallary from "./Components/Gallary/Gallary"
import Carousal from "./Components/Testimonials/Carousal"
import Contact from "./Components/Contact/Contact"
import { Routes,Route } from "react-router-dom"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exect path="/" element={<Home />}/>
        <Route exect path="/Program" element={<Program />}/>
        <Route exect path="/About" element={ <About/>}/>
        <Route exect path="/Gallary" element={ <Gallary/>}/>
        <Route exect path="/Carousal" element={<Carousal/>}/>
        <Route exect path="/Contact" element={<Contact/>}/>
      </Routes>
      
      
    </>
  )
}

export default App
