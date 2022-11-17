import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid text-center">
      <div className="header-row row">
        <div className="title-block">
          <span className="title-text">
            Let's All Volunteer <br />
            for Stuff!
          </span>
        </div>
        <div className="buttons-block">
          <button
            type="button"
            className="btn btn-header"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            type="button"
            className="btn btn-header"
            onClick={() => navigate("/activities/")}
          >
            Volunteer Activities
          </button>
          <button
            type="button"
            className="btn btn-header"
            onClick={() => navigate("/volunteers/")}
          >
            Our Team
          </button>
          <button type="button" className="btn btn-header">
            Sign Up Now!
          </button>
        </div>

        <div className="padding-block"></div>
        <div className="user-profile-header">
          <span onClick={() => navigate("/user/")}>
            <img
              src="/images/user.png"
              className="user-image"
              alt="user icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
