import HomeSearch from "./HomeSearch";
import HomeFilter from "./HomeFilter";
import HomeItemContainer from "./HomeItemContainer";

function Home () {
    return (
        <div>
            <h2>this is Home</h2>
            <HomeSearch />
            <HomeFilter />
            <HomeItemContainer />
        </div>
    )
  }
  
  export default Home;