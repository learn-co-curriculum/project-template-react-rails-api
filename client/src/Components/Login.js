import { useEffect, useState } from "react";
import LoginBar from "./LoginBar";
import { Link, Navigate } from "react-router-dom";
function Login({ afterloginpath = "/browse" }){
    const [intro, setIntro] = useState("Plz Enter Password")
    const [navigateNow, setNavigateNow] = useState(false)
    const [logins, setLogins] = useState("")
    const [passwords, setPasswords] = useState("")
    function doPassword(e){
        setPasswords(e.value)
    }
    function doLogin(e){
        setLogins(e.value)
    }
    function create(){
        fetch("http://localhost:3000/user",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: logins,
                password: passwords,
            })
        })
        .then(r=>r.json())
        .then(r=>{
            if(r.errors){
                if(r.errors.username){
                    setIntro(`Username ${r.errors.username[0]}!!!`)
                }
                else{
                    setIntro(`Password ${r.errors.password[0]}!!!`)
                }
            }
            else{
                setNavigateNow(true)
            }
        })
    }
    function login(){
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: logins,
                password: passwords
            })
        })
        .then(r=>r.json())
        .then(r=>{
            if(r.error){
                setIntro(r.error)
            }
            else{
                setNavigateNow(true)
            }
        })
    }
    console.log(afterloginpath)
    return navigateNow ? <Navigate to={`${afterloginpath}`}/> : <div
    style={{width:"30%", marginLeft:"35%", height:"40%", backgroundColor: "red", marginTop:"20%", borderRadius:"30px"}}
    >
        <div style={{width:"50%", marginLeft:"25%", textAlign:"center", paddingTop:"5%"}}>{intro}</div>
        <LoginBar textMess={"Login"} value={logins} valueChange={doLogin}/>
        <LoginBar textMess={"Password"} value={passwords} valueChange={doPassword}/>
        <div style={{padding:"5%"}}></div>
        <div style={{margin: "auto", width: "100%", marginTop:"20px"}}>
            <div onClick={()=>create()} style={{width: "45%", height:"30px", backgroundColor:"purple", float: "left", marginRight: "10%", overflow:"hidden", borderRadius:"10px", textAlign:"center"}}>
                Create
            </div>
            <div onClick={()=>login()} style={{width: "45%", height:"30px", backgroundColor:"purple", float: "left", overflow:"hidden", borderRadius:"10px", textAlign:"center"}}>
                Login
            </div>
        </div>
    </div>
}
export default Login;