import NavBar from "./NavBar";

function Header({ setLoginModalOpen, user, setUser }) {
  return (
    <div>
      <NavBar
        setLoginModalOpen={setLoginModalOpen}
        user={user}
        setUser={setUser}
      />
    </div>
  );
}

export default Header;
