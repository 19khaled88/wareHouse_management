import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../components/firebase/firebase.init'
import Loading from '../components/LoadingPage/Loading'

const RequiredAuth = ({ children }) => {
  let [user1, loading] = useAuthState(auth)
  let location = useLocation()
  if (loading) {
    return <Loading />
  }

  if (!user1) {
    return (
      <Navigate to="/register" state={{ from: location }} replace></Navigate>
    )
  }
  return children
}

export default RequiredAuth
