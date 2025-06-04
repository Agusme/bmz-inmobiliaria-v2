import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import Contact from "./screens/Contact"
import Nosotros from "./screens/Nosotros"
import Propiedades from "./screens/Propiedades"
import Admin from "./screens/Admin"

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar/>      
          <div className="flex-grow">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/admin" element={<Admin/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
