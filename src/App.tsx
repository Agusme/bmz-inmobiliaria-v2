import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./screens/Home"
import Contact from "./screens/Contact"
import Nosotros from "./screens/Nosotros"
import Propiedades from "./screens/Propiedades"
import Admin from "./screens/Admin"
import TableAdmin from "./components/Admin/TableAdmin"
import PropertyFound from "./screens/PropertyFound"
import DetallePropiedad from "./screens/DetallePropiedad"
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes"
import LoginPage from "./screens/LoginPage"

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/contacto" element={<Contact />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/propiedades" element={<Propiedades />} />
            <Route path="/property/:id" element={<DetallePropiedad />} />
            <Route path="/admin" element={<PrivateRoutes>
              <Admin />
            </PrivateRoutes>} />
            <Route
              path={'/admin/propiedadesCargadas'} element={<PrivateRoutes>
                <TableAdmin />
              </PrivateRoutes>}
            />
            <Route path="/propiedadesEncontradas" element={<PropertyFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
