import React, { useEffect, useState } from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../components/firebase/firebase.init'
import { onAuthStateChanged } from 'firebase/auth'
const RequiredAuth = ({ children }) => {
  let [user] = useAuthState(auth)
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

  if (!user) {
    return (
      <Navigate to="/register" state={{ from: location }} replace></Navigate>
    )
  }
  return children
}

export default RequiredAuth
