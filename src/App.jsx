import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Program from "./Components/Program/Program"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Gallary from "./Components/Gallary/Gallary"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <div className="main_container">
        <Title subTitle = "Our Program" title = "What We Offer"/>
        <Program />
        <About/>
        <Title subTitle = "gallery" title = "Campus Photos"/>
        <Gallary/>
      </div>
    </>
  )
}

export default App
