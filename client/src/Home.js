import SignupForm from "./Signup"
import LoginPage from "./Login"
import { useState, useEffect } from "react"


function Home({updateUser}){

    const [slide, setSlide] = useState (false)

    const switchPage = () => {
        setSlide(!slide)
    }

    return (
        <div>
           <h1> HOME </h1>
            <div className = "container" >
            <div className = { slide ? "wrapper-slide" : "wrapper" }>
               {slide ?
                <h1>Have fun!</h1> : <h1> Hello My Friend!</h1>  }
                <div className = "login-img">
                    <img src= "https://media2.giphy.com/media/9JrkkDoJuU0FbdbUZU/giphy.gif?cid=ecf05e47lc9vpaf4dss497mwytvz7vta0rhc9y8rj5mkdwnh&rid=giphy.gif&ct=g" alt = "login"/>
                </div>
            </div>
                <SignupForm switchPage={switchPage}/>
                <LoginPage  switchPage={switchPage} updateUser = {updateUser}/>
            </div>
        </div>
    )

}

export default Home
