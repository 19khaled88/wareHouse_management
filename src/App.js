import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@material-tailwind/react/tailwind.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Inventory from './components/Inventory/Inventory'
import Register from './components/Register/Register'
import ManageInventory from './components/ManageInventory/ManageInventory'
import RequiredAuth from './Auth/RequiredAuth'
import NotFound from './components/NotFound/NotFound'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/inventory/:id"
          element={
            <RequiredAuth>
              <Inventory />
            </RequiredAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/manageInventory" element={<ManageInventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
