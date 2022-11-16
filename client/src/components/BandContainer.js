import React from 'react'
import BandCard from './BandCard'

const BandContainer = ({bands}) => {
    const bandCard = bands.map((band) => {
        return <BandCard key = {band.id} band={band}/>
    })
  return (
    <>{bandCard}</>
  )
}

export default BandContainer