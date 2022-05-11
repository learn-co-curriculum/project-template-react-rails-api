import Login from "./Login";

function Home() {
    return (<>
        <Login />
        <form>
            <p>parent</p>
            <input type="text" name="userId" required="required"></input>
            <input type="hidden" name="number" required="required"></input>
            <input type="submit" value="submit"></input>
        </form>
        </>);
}

<li id="PlayDateCard">
<div>

<img className="imageCard" src={img} alt="alt"/>
<h1>{name}</h1>
<h3>{age}</h3>
<h3>📍{location} ,📆 {date}</h3>
<p> Early Bird or Night Owl: {early ? '🐓' : null}    {nightOwl ? '🦉' : null} </p>
<p> Verified: {verified ? '✅' : null}

 </p>
</div>
</li>
</div>

export default Home;