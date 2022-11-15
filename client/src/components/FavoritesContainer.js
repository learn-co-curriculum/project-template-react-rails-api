import React from 'react'

const FavoritesContainer = ({genre_1, genre_2, genre_3, favorite_band}) => {
  return (
    <div>
      <div>
        <h1>My favorite band</h1>
        <h3>{favorite_band}</h3>
        {/* use Martine to let users upload band image? */}
      </div>

      <div>
        <h1>My favorite genres</h1>
        <h3>{genre_1}</h3>
        <h3>{genre_2}</h3>
        <h3>{genre_3}</h3>
      </div>
    </div>
  )
}

export default FavoritesContainer
