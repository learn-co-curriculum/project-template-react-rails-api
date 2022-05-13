import ParentsList from "./ParentsList";

function Home({playdates}){

    const renderPlaydates = playdates.map(playdate => <> <ParentsList
    key={playdate.id}
    id={playdate.id}
    location={playdate.location}
    date={playdate.date}
    user={playdate.user}
    parent={playdate.parent}
    playdates={playdate}
    /></>)
console.log(playdates);
return (
    <main>
        <ul>
            {renderPlaydates}
        </ul>
    </main>
    )
}

export default Home;