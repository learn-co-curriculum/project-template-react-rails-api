import React from 'react'
import { Flex } from '@mantine/core'

const FavoritesContainer = ({genre_1, genre_2, genre_3, favorite_band}) => {
  return (
    <Flex
      gap="xl"
      sx={{
        justifyContent:'space-around',
      }}
    >
      <div>
        <h1 className='favorite-header'>
          <a className='underline-style'>Favorite band</a>
        </h1>
        <h3 className='favorite-body'>{favorite_band}</h3>
      </div>

      <div>
        <h1 className='favorite-header'>
          <a className='underline-style'>Favorite genres</a>
        </h1>
        {genre_1 ? <h3 className='favorite-body'>1. {genre_1}</h3> : null}
        {genre_2 ? <h3 className='favorite-body'>2. {genre_2}</h3> : null}
        {genre_3 ? <h3 className='favorite-body'>3. {genre_3}</h3> : null}
      </div>
    </Flex>
  )
}

export default FavoritesContainer
