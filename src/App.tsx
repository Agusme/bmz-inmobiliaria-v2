import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className=" flex flex-col min-h-screen">
        <Navbar/>      
          <div className="flex-grow max-w-screen-xl mx-auto px-4">
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
