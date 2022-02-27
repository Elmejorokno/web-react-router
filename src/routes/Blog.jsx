import React from 'react'
import { useSearchParams } from 'react-router-dom'
import NameBlog from '../components/NameBlog'
import { useFetch } from '../hooks/useFetch'

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [data, loading, error] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  if (error) {
    return console.log(error)
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

  const handleChange = (e) => {
    const filter = e.target.value

    if (filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div>
      <h1>Blog</h1>
      <input
        type="text"
        className="form-control mb-2"
        name="tInput"
        value={searchParams.get('filter') || ''}
        onChange={handleChange}
        autoComplete="off"
      />

      {searchParams.get('filter')
        ? data.map((item) => {
            const filter = searchParams.get('filter').toLowerCase()
            const title = item.title.toLowerCase()
            if (title.startsWith(filter)) {
              return <NameBlog key={item.id} blog={item} />
            } else {
              return null
            }
          })
        : data.map((item) => <NameBlog key={item.id} blog={item} />)}
    </div>
  )
}

export default Blog
