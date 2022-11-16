import React from 'react'
import BandCard from './BandCard'
import { Flex, Button } from '@mantine/core';


const BandContainer = ({bands}) => {
    const bandCard = bands.map((band) => {
        return <BandCard key = {band.id} band={band}/>
    })
  return (
    <Flex>
      <>{bandCard}</>
    </Flex>
  )
}

export default BandContainer
