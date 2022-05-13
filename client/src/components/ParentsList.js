

function ParentsList({ playdate }) {
    const { location, date, user, parent} = playdate;

console.log(playdate);

    return (
         <div className="template4">
            <h1>{location}</h1>
            <h1>{date}</h1>
            <h1>{user}</h1>
            <h1>{parent}</h1>
                {/* <h1>Welcome! {username}</h1>
                <h2>{email}</h2>
                <img src={"https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"} alt="alt" />
                <h2>{name} {age}</h2>
                <h2>{address}</h2>
                <h2>{early ? '🐓' : null}    {nightOwl ? '🦉' : null} </h2>
                <h2>{verified ? '✅' : null}</h2>
                <h2>{emergency ? '🚨' : null}</h2>   */}
            </div>
    )
}
export default ParentsList;