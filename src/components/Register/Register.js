import React, { useState, useRef } from 'react'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import auth from '../firebase/firebase.init'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../LoadingPage/Loading'
const provider = new GoogleAuthProvider()
const Register = () => {
  const [isHaveAccount, SetIsHaveAccount] = useState(false)
  const [user3, setUser] = useState('')
  const [error2, setErrors] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const [
    createUserWithEmailAndPassword,
    user1,
    loading1,
    error1,
  ] = useCreateUserWithEmailAndPassword(auth)
  const [sendEmailVerification, sending, error3] = useSendEmailVerification(
    auth,
  )
  const emailRef = useRef('')
  const passRef = useRef('')
  const cPassRef = useRef('')
  let from = location.state?.from?.pathname || '/'
  const registerHandler = () => {
    SetIsHaveAccount(!isHaveAccount)
  }
  let errorState
  if (error || error1) {
    errorState = error?.message || error1?.message
  }
  if (loading || loading1) {
    return <Loading />
  }
  setPersistence(auth, browserLocalPersistence)
  if (user || user1 || user3) {
    navigate(from, { replace: true })
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
    if (emailFound === null || passFound === null) {
      setErrors('Email or Passowrd is empty')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
    }
    signInWithEmailAndPassword(emailFound, passFound)
  }
  const signUpFormSubmitHandler = (e) => {
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
    if (emailFound === null || passFound === null) {
      setErrors('Email or Passowrd is empty')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
    }
    if (passFound !== cPassFound) {
      setErrors('Sorry! passwords not match')
      const timer = setTimeout(() => {
        setErrors('')
      }, 3000)
    }
    createUserWithEmailAndPassword(emailFound, passFound)
    sendEmailVerification()
    alert('Send Email')
  }

  const SendEmailVerification = () => {
    const [sendEmailVerification, sending, error3] = useSendEmailVerification(
      auth,
    )
    if (sending) {
      return <p>Sending....</p>
    }
    if (error3) {
      return (
        <div>
          <p>Error: {error.message}</p>
        </div>
      )
    }

    sendEmailVerification()
    alert('Send Email')
  }

  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const currentUser = result.user
        // setUser(currentUser)
        navigate('/inventory')
        toast('Successfully signned in')
      })
      .catch((error) => {
        const currentError = error.message
        setErrors(currentError)
        toast('Sorry, sign in Unsuccessful')
        setTimeout(() => {
          setErrors('')
        }, 3000)
      })
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
                {error2 ? error2 : ''}
                {errorState ? errorState : ''}
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
            <form onSubmit={signUpFormSubmitHandler}>
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
                {error2 ? error2 : ''}
                {errorState ? errorState : ''}
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
        <p className="mt-2">or</p>
        <div className="flex flex-col">
          <div>
            <p className="text-pink-800 text-sm my-3 mb-2 text-center">
              <button
                onClick={signWithGoogle}
                className="w-full px-6 py-2 bg-gray-200 text-dark font-medium
                text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                ease-in-out flex justify-center items-center"
              >
                <img
                  className="w-5 h-5 inline mr-4"
                  src="/images/Google-icon.png"
                />{' '}
                Sign in with google
              </button>
            </p>
          </div>
          <div className="flex flex-row justify-between">
            {isHaveAccount ? (
              <p className="text-gray-800 text-sm mt-2 mb-2 text-center">
                Don't have an account?{' '}
                <button
                  onClick={registerHandler}
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Register
                </button>
              </p>
            ) : (
              <p className="text-gray-800 text-sm mt-2 mb-2 text-center">
                Have Account?{' '}
                <button
                  onClick={registerHandler}
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Login
                </button>
              </p>
            )}

            <div>
              <p className="text-sm mt-2 mb-2">
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot password?
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
