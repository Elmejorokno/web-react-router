import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Inicio from './routes/Inicio'
import Blog from './routes/Blog'
import Post from './routes/Post'
import Contacto from './routes/Contacto'
import PageNotFound from './routes/PageNotFound'

import './index.css'
import UserProvider from './context/UserProvider'
import RutaProtegida from './routes/RutaProtegida'
import CheckLogin from './components/CheckLogin'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="contacto" element={<Contacto />} />
            <Route
              path="protegida"
              element={
                <CheckLogin>
                  <RutaProtegida />
                </CheckLogin>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
