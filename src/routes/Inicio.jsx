import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Inicio = () => {
  const { user, signIn, signOut } = useContext(UserContext)

  return (
    <div>
      <h1>Inicio</h1>
      <h2>{user ? 'Conectado' : 'Desconectado'}</h2>

      {user ? (
        <div className="d-flex gap-3">
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => signOut()}
          >
            Cerrar sesión
          </button>
          <Link to={'/protegida'} className="btn btn-outline-light">
            Protegida
          </Link>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => signIn()}
        >
          Acceder
        </button>
      )}
    </div>
  )
}

export default Inicio
