import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useRef } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from '../firebase/firebase.init'

const Register = () => {
  const [isHaveAccount, SetIsHaveAccount] = useState(false)
  const [errors, setErrors] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const emailRef = useRef('')
  const passRef = useRef('')
  const cPassRef = useRef('')
  const registerHandler = () => {
    SetIsHaveAccount(!isHaveAccount)
  }
  if (error) {
    return (
      <div>
        <p>Error. {error.message}</p>
      </div>
    )
  }
  if (loading) {
    return <p>Loading....</p>
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    )
  }
  const loginFormSubmitHandler = (e) => {
    e.preventDefault()
    const emailFound = emailRef.current.value
    const passFound = passRef.current.value
    if (passFound.length < 6) {
      setErrors('Password must be at least 6 characters')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
      return timer
    }
    signInWithEmailAndPassword(emailFound, passFound)
  }
  const signInFormSubmitHandler = (e) => {
    e.preventDefault()
    const emailFound = emailRef.current.value
    const passFound = passRef.current.value
    const cPassFound = cPassRef.current.value
    if (passFound.length < 6) {
      setErrors('Password must be at least 6 characters')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
      return timer
    }
    if (passFound !== cPassFound) {
      setErrors('Sorry! passwords not match')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
    }
    createUserWithEmailAndPassword(emailFound, passFound)
  }
  return (
    <>
      <div className="mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white max-w-sm">
        {isHaveAccount ? (
          <>
            <div className="text-2xl">Login Form</div>
            <form onSubmit={loginFormSubmitHandler}>
              <div className="form-group mb-3">
                <label
                  for="email"
                  className="form-label block mb-2 text-left text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base
                      font-normal text-gray-700 bg-white bg-clip-padding
                      border border-solid border-gray-300 rounded transition
                      ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                      focus:border-blue-600 focus:outline-none"
                  id="email"
                  name="email"
                  ref={emailRef}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-3">
                <label
                  for="password"
                  className="form-label block text-left mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  name="password"
                  ref={passRef}
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                Empty space
              </div>
              <button
                type="submit"
                className="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"
              >
                Sign in
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="text-2xl">Registration Form</div>
            <form onSubmit={signInFormSubmitHandler}>
              <div className="form-group mb-3">
                <label
                  for="email"
                  className="form-label block mb-2 text-left text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control block w-full px-3 py-1.5 text-base
                     font-normal text-gray-700 bg-white bg-clip-padding
                     border border-solid border-gray-300 rounded transition
                     ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                     focus:border-blue-600 focus:outline-none"
                  id="email"
                  name="email"
                  ref={emailRef}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mb-3">
                <label
                  for="password"
                  className="form-label block text-left mb-2 text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control block
                     w-full
                     px-3
                     py-1.5
                     text-base
                     font-normal
                     text-gray-700
                     bg-white bg-clip-padding
                     border border-solid border-gray-300
                     rounded
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  name="password"
                  ref={passRef}
                  placeholder="password"
                />
              </div>
              <div className="form-group mb-3">
                <label
                  for="cPassword"
                  className="form-label block text-left mb-2 text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control block
                     w-full
                     px-3
                     py-1.5
                     text-base
                     font-normal
                     text-gray-700
                     bg-white bg-clip-padding
                     border border-solid border-gray-300
                     rounded
                     transition
                     ease-in-out
                     m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="cPassword"
                  name="cPassword"
                  ref={cPassRef}
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                Empty space
              </div>
              <button
                type="submit"
                className="
                   w-full
                   px-6
                   py-2.5
                   bg-blue-600
                   text-white
                   font-medium
                   text-xs
                   leading-tight
                   uppercase
                   rounded
                   shadow-md
                   hover:bg-blue-700 hover:shadow-lg
                   focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                   active:bg-blue-800 active:shadow-lg
                   transition
                   duration-150
                   ease-in-out"
              >
                Sign Up
              </button>
            </form>
          </>
        )}
        <div className="flex flex-row justify-between">
          {isHaveAccount ? (
            <p className="text-gray-800 text-sm mt-6 mb-2 text-center">
              Don't have an account?{' '}
              <button
                onClick={registerHandler}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Register
              </button>
            </p>
          ) : (
            <p className="text-gray-800 text-sm mt-6 mb-2 text-center">
              Have Account?{' '}
              <button
                onClick={registerHandler}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Login
              </button>
            </p>
          )}

          <p className="text-sm mt-6 mb-2">
            <a
              href="#!"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
