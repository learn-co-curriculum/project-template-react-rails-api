function Signup() {
    return (  
       
    <form>
      <div className="main">
        <div>
          <div>
            <h1>Signup</h1>
            <div>
              <input type="text" placeholder="user name" className="name" />
            </div>
            <br />
            <div>
              <input type="text" placeholder="email" className="name" />
            </div>
            <br />
            <div>
              <input type="text" placeholder="password" className="name" />
            </div>
            <br />
            <div>
              <input type="text" placeholder="password confirmation" className="name" />
            </div>
            <br />
            <div>
            <button type="button" class="btn btn-primary btn-lg">
              Get Started
            </button>
            </div>
            
          </div><br/>
        </div>
      </div>
    </form>
  
    );
}
 
export default Signup;