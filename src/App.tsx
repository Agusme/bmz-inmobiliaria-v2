import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import Contact from "./screens/Contact"
import Nosotros from "./screens/Nosotros"
import Propiedades from "./screens/Propiedades"

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar/>      
          <div className="flex-grow max-w-screen-xl mx-auto px-4">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/propiedades" element={<Propiedades />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
