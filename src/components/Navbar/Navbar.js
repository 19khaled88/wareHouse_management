import React, { useState } from 'react'

import { signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { MdInventory } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import { AiFillHome, AiOutlineLogout } from 'react-icons/ai'
import { FiHome, FiLogOut } from 'react-icons/fi'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'

const Navbar = ({ fixed }) => {
  const [user, loading, error] = useAuthState(auth)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navigate = useNavigate()
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        toast('Logout is successful')
        navigate('/register')
      })
      .catch((error) => {
        toast('You are still logged in')
      })
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              to="/"
            >
              BOOK-warehouse-control
            </Link>
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
                  to="/blog"
                >
                  <MdInventory className="text-lg opacity-75" />
                  <span className="ml-2 mt-1">Blog</span>
                </Link>
              </li>
              {user !== null ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/myItems"
                    >
                      <MdInventory className="text-lg opacity-75" />
                      <span className="ml-2 mt-1">MyItems</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={logoutHandler}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FiLogOut className="text-lg opacity-75" />
                      <span className="ml-2 mt-1">Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    to="/register"
                  >
                    <FaUserCircle className="text-lg opacity-75" />
                    <span className="ml-2 mt-1">Register</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
