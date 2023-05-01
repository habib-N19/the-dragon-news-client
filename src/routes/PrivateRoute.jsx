import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return <Spinner animation='border' variant='primary'></Spinner>
  }
  if (user) {
    return children
  }
  return <Navigate state={{ from: location }} to='/login' replace></Navigate>
}

export default PrivateRoute
/**
 * if user is logged in then allow them to visit the route
 * else redirect the user to
 * setup the private router
 *
 */
