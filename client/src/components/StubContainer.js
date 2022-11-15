import React from 'react'
import Stubs from './Stubs'

const StubContainer = ({user}) => {
  const stubs = user.concerts
  function isStub(date){
    return date < Date.today
  }
  const stubsList = stubs.filter(isStub)

  return (
    <div>{stubsList}</div>
  )
}

export default StubContainer
