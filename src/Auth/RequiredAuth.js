import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../components/firebase/firebase.init'

const RequiredAuth = ({ children }) => {
  let [user1] = useAuthState(auth)
  let location = useLocation()

  // auth.onAuthStateChanged((user) => {
  //   if (!user) {
  //     return (
  //       <Navigate to="/register" state={{ from: location }} replace></Navigate>
  //     )
  //   }
  //   return children
  // })
  // onAuthStateChanged(auth, (user) => {
  //   if (!user) {
  //     return (
  //       <Navigate to="/register" state={{ from: location }} replace></Navigate>
  //     )
  //   }
  //   return children
  // })

  if (!user1) {
    return (
      <Navigate to="/register" state={{ from: location }} replace></Navigate>
    )
  }
  return children
}

export default RequiredAuth
