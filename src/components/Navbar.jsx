import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {
  const { user } = useContext(UserContext)

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={'/'}>{user ? 'logeado' : 'sin conexion'}</Link>
        <NavLink to={'/'} className="btn btn-outline-light">
          Inicio
        </NavLink>
        <NavLink to={'/blog'} className="btn btn-outline-light">
          Blog
        </NavLink>
        <NavLink to={'/contacto'} className="btn btn-outline-light">
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
