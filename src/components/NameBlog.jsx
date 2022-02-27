import React from 'react'
import { Link } from 'react-router-dom'

const NameBlog = ({ blog }) => {
  const { id, title } = blog
  return (
    <h4>
      <Link to={`/blog/${id}`}>
        {id} - {title}
      </Link>
    </h4>
  )
}

export default NameBlog
