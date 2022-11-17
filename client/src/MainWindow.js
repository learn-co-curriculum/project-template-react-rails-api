import { Route, Routes } from "react-router-dom";
import Home from "./Home";
// import UserProfile from "./UserProfile";
import VolunteerActivities from "./VolunteerActivities";
import AllVolunteers from "./AllVolunteers";
// import CookieTest from "./CookieTest";

function MainWindow({ user }) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route
          path="/user/"
          element={<UserProfile user={user} onLogin={onLogin} />}
        /> */}
        <Route path="/activities/" element={<VolunteerActivities />} />
        <Route path="/volunteers/" element={<AllVolunteers />} />
        {/* <Route path="/cookietest/" element={<CookieTest />} /> */}
      </Routes>
    </>
  );
}

export default MainWindow;
