import SignupForm from "./Signup"
import LoginPage from "./Login"


function Home(){
    return (
        <div>
           <h1> Main page w/ login & signup</h1> 
           <SignupForm/>
           <LoginPage/>
        </div>
    )

}

export default Home