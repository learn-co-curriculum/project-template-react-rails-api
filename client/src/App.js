import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import MyPlants from './components/MyPlantsFolder/MyPlants';
import ReviewPlants from './components/ReviewsFolder/ReviewPlants';
import GlobalPlants from './components/GlobalPlantsFolder/GlobalPlants';
import SigninPage from './components/LoginFolder/SigninPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>

        <Route exact path="/signInPage">
          <SigninPage/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/about">
          <About/>
        </Route>

        <Route exact path="/myPlants">
          <MyPlants/>
        </Route>

        <Route exact path="/reviews">
          <ReviewPlants/>
        </Route>

        <Route exact path="/globalPlants">
          <GlobalPlants/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
