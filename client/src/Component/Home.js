import React from 'react'
import '../Style/Home.css'
import {useEffect, useRef} from 'react'

function Home({user}) {
  const mounted = useRef(false);


  useEffect(() => {
    mounted.current = true

    return () => {
    mounted.current = false
    }
  },[])


  return (
    <div className='home'>
      <p>Welcome to Shopper App That find alternative cheaper version of a item. {user.name} </p>

      
      
    </div>
  )
}

export default Home