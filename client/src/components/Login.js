
function Login(){
    return (    
    <form className="home">
        <p>Login to your account</p>
        <div>
            <label >UserName: </label>
            <input className="loginData" type="text" name="userId" required="required"></input>
        </div>
        <div>
            <label>Password: </label>
            <input className="loginData" type="password" name="pwd" required="required"></input>
        </div>
        <div>
            <input className="loginBtn" type="submit"  alt="Login" value="Login"></input>
        </div>
  </form>
  )
}


export default Login;