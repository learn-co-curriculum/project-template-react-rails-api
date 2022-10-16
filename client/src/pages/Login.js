import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="container">

    <div className='row'>
      <div className='col-md-8' style={{
        backgroundColor:"#dede",
        opacity:"0.1",
    backgroundImage:"url(https://cdn.vectorstock.com/i/1000x1000/95/06/plus-size-black-curvy-lady-at-yoga-class-vector-32749506.webp)"  }}>
      </div>
   

                {
        showLogin
        ? (
            <>
              <LoginForm onLogin={onLogin} />
              <br />
              <p>
                Don't have an account? &nbsp;
                <button className='btn  btn-block btn-light text-primary ' onClick={() => setShowLogin(false)}>Sign Up</button>
              </p>
            </>
        )
        : (
            <>
              <SignUpForm onLogin={onLogin} />
              <br />
              <p>
                Already have an account? &nbsp;
                <button className='btn   btn-block btn-light text-primary ' onClick={() => setShowLogin(true)}>Log In</button>
              </p>
            </>
        )
      }
</div>
</div>

  );
}

export default Login;
