import { useState } from "react";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

function UserProfile({ user, setUser, handleLogoutClick }) {
  const display = user ? (
    <UserCard user={user} handleLogoutClick={handleLogoutClick} />
  ) : (
    <LoginForm setUser={setUser} user={user} />
  );

  return <>{display}</>;
}

export default UserProfile;
