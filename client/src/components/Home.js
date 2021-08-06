function Home({ user }) {
    
      return <h1 style={{color: "#0D87E3"}}>Welcome, {user.role.first_name}!</h1>;

  }
  
  export default Home;
  