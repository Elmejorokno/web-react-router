import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Post = () => {
  const { id } = useParams()

  const [data, loading, error, status] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  if (error) {
    console.log(error)
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (status === 404) {
    return (
      <div>
        <h2>Post no encontrado</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>
        {data.id} - {data.title}
      </h2>
      <p>{data.body}</p>
    </div>
  )
}

export default Post
