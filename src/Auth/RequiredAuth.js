import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../components/firebase/firebase.init'
import { onAuthStateChanged } from 'firebase/auth'
const RequiredAuth = ({ children }) => {
  let [user] = useAuthState(auth)
  const [changeState, setChangeState] = useState('')
  let location = useLocation()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // const uid = user.uid
      // setChangeState(uid)
      return (
        <Navigate to="/register" state={{ from: location }} replace></Navigate>
      )
    }
    return children
  })

  // if (!user) {
  //   return (
  //     <Navigate to="/register" state={{ from: location }} replace></Navigate>
  //   )
  // }

  return children
}

export default RequiredAuth
