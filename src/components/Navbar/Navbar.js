import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBeer, FaRegUserCircle, FaUserCircle } from 'react-icons/fa'
import { MdInventory } from 'react-icons/md'
import { ToastContainer } from 'react-toastify'
import { AiFillHome } from 'react-icons/ai'
import { FiHome } from 'react-icons/fi'

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              BOOK-warehouse-control
            </a>
            <ToastContainer />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <FiHome className="text-lg opacity-75" />
                  <span className="ml-2 mt-1">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/inventory"
                >
                  <MdInventory className="text-lg opacity-75" />
                  <span className="ml-2 mt-1">Inventory</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/register"
                >
                  <FaUserCircle className="text-lg opacity-75" />
                  <span className="ml-2 mt-1">Register</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
