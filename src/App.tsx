import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Aquí puedes agregar un Navbar si lo necesitas */}
        <div className="flex-grow">
          <Routes>
            <Route></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
