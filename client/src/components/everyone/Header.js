import NavBar from "./NavBar";

function Header({ setLoginModalOpen }) {
  return (
    <div>
      <NavBar setLoginModalOpen={setLoginModalOpen} />
    </div>
  );
}

export default Header;
