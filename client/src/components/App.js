import logo from '../assets/logo.svg';
import '../assets/App.css';
import { 
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import AccountPage from './AccountPage';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Container maxwidth="sm">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/account">
              <AccountPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
