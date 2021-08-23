import Friends from "../Components/Friends"

const FriendsPage = () => {

    function handleSearch(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Search for friends</h1>
            <div className="header__search">
                <input
                type="search"
                placeholder="Find friends"
                onChange={handleSearch}
                />
            </div>

            <h1>Friends</h1>
            <Friends />


        </div>
    )
}

export default FriendsPage
