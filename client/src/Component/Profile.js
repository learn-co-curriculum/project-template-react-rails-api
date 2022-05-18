import React from 'react'

function Profile() {
  function logout(){
    fetch('/logout', {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile