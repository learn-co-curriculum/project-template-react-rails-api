import React from 'react'
import '../Style/Home.css'

function Home({user}) {
  return (
    <div>
      <p>Welcome {user.name} </p>
      <p>Meet your financial advisors</p>
      
    </div>
  )
}

export default Home