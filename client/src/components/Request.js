import useEffect from 'react';

function Request(playdate) {

    useEffect(()=> {
        fetch(`/playdates`)
        .then(resp => resp.json())
        .then(data => playdate(data)
        )}
      , []);

    return (

        <div className="template4">
            {/* <h1>Request</h1>
            <h3>{parent} wants to arrange a playdate! </h3>
            <h3>{location}</h3>
            <h3>{date}</h3>
            <button>Accept</button>
            <button>Decline</button> */}
        </div>
    )
}
export default Request;