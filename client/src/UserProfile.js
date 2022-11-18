import { useState } from "react";
import LoginForm from "./LoginForm";
import UserCard from "./UserCard";

function UserProfile({ user, setUser }) {
  const display = user ? (
    <UserCard user={user} />
  ) : (
    <LoginForm setUser={setUser} user={user} />
  );

  return <>{display}</>;
}

export default UserProfile;
