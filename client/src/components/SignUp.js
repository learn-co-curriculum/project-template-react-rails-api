function SignUp () {

    return (
     <div className="login-container">
         <div className="login-box">
             <form onSubmit={handleLogin} className="login-form">
                 <div className="login-input-div">
                     <input className="login-input"
                         onChange={(e) => {setUser(e.target.value)}}
                         placeholder="Enter username" 
                         type="text" 
                         value={user}
                    />
                 </div>
                  <div className="login-input-div">
                     <input className="login-input"
                      onChange={(e) => {setPassword(e.target.value)}}
                      placeholder="Enter password" 
                      type="password" 
                      value={password}
                     />
                        </div>
                        <div className="login-button-div">
                            <button className="button" type="submit"> Log in </button>
                        </div>
                        <p className="error">{error ? error : null}</p>
            </form>
         </div>
      </div>
    )
}

