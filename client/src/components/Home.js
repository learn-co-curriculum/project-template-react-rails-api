// import Login from "./Login";

function Home({parent, setParent}){

    console.log(parent)

    return (
    <>
    <h1>home</h1>  


    <div>
        <img src="img" alt="alt"/>
        {/* <h1>{name.parent}</h1> */}
        <h3>"age"</h3>
        <h3>📍"location"</h3>
        <p> Early Bird or Night Owl: {"early" ? '🐓' : null}    {"nightOwl" ? '🦉' : null} </p>
        <p> Verified: {"verified" ? '✅' : null}</p>
    </div>
</>);}

export default Home;