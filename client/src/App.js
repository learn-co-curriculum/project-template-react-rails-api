import GoogleLogin from 'react-google-login';
import './App.css';



function App() {

  const handleLogin = async googleData => {
    const res = await fetch("/api/v1/auth/google", {
        method: "POST",
        body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    // store returned user somehow
  }


// Verify Google-provided token, check against our database and store results in session

  // const { OAuth2Client } = require('google-auth-library')
  // const client = new OAuth2Client(process.env.CLIENT_ID)
  //  server.post("/api/v1/auth/google", async (req, res) => {
  //     const { token }  = req.body
  //     const ticket = await client.verifyIdToken({
  //         idToken: token,
  //         audience: process.env.CLIENT_ID
  //     });
  //     const { name, email, picture } = ticket.getPayload();    
  //     const user = await db.user.upsert({ 
  //         where: { email: email },
  //         update: { name, picture },
  //         create: { name, email, picture }
  //     })

  //     req.session.userId = user.id

  //     res.status(201)
  //     res.json(user)
  // })


//   // Check authentication middleware
//   server.use(async (req, res, next) => {
//     const user = await db.user.findFirst({where: { id:  req.session.userId }})
//     req.user = user
//     next()
// })

// // Sign out route

// server.delete("/api/v1/auth/logout", async (req, res) => {
//   await req.session.destroy()
//   res.status(200)
//   res.json({
//       message: "Logged out successfully"
//   })
// })

// "Me" route

// server.get("/me", async (req, res) => {
//   res.status(200)
//   res.json(req.user)
// })

  <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/>

  return (
    <div className="App">
blah blah test
    </div>
  );
}

export default App;
