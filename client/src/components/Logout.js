function Logout ({onLogout}){

function handleLogout() {
    fetch("/logout", {
        method: "DELETE",
        }).then(() => onLogout());
      }

return(
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>

)}



export default Logout;




 