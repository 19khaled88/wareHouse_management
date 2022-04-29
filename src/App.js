import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@material-tailwind/react/tailwind.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'
import Register from './components/Register/Register'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
