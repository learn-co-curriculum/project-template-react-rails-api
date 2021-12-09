import React from 'react'

function Card({data, idx}) {
    // console.log(data.sort((a, b) => a.score > b.score))
    return (
        <div id="profile-card">
            <div className='grid-2'>
                <img id='profile-avatar' src={data.avatar.img_url}/>
            </div>
            <div className='grid-3'>
                <h2>Rank: {idx + 1}</h2>
                <h2>{idx === 0 ? `👑 ${data.username}` : data.username}</h2>
                <h3>{data.avatar.name}</h3>
            </div>
        </div>
    )
}

export default Card
