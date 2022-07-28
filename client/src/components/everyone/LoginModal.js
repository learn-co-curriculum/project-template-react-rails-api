import { Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginModal() {
  return (
    <div>
      <h1>LoginModal</h1>
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </div>
  );
}

export default LoginModal;
