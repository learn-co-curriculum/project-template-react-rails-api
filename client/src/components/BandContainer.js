import React from 'react'
import BandCard from './BandCard'
import { Flex, Button } from '@mantine/core';


const BandContainer = ({bands}) => {
    const bandCard = bands.map((band) => {
        return <BandCard key = {band.id} band={band}/>
    })
  return (
    <div className='flex-parent-bands'>
      <>{bandCard}</>
    </div>
  )
}

export default BandContainer
