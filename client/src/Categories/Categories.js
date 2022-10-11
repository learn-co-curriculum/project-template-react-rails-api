import React from 'react'
import '../Categories/Categories.css'

function Categories({blog}) {

    const categoryStyles = {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${blog.imgUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "250px",
        height: "100px",
        marginTop: "10px",
        cursor: "pointer"
    }

  return (
    <div className='category' style={categoryStyles}>
        <p>{blog.category}</p>
    </div>
  )
}

export default Categories