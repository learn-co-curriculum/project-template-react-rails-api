import LoginForm from "./LoginForm";

function UserProfile({ user, onLogin }) {
  const display = user ? (
    <button
      value="button"
      onClick={() => {
        fetch(
          "http://localhost:4000/me"
          // , {
          // method: "GET",
          // withCredentials: true,
          // }
        ).then((response) => {
          if (response.ok) {
            response.json().then(console.log);
          }
        });
      }}
    />
  ) : (
    <LoginForm onLogin={onLogin} user={user} />
  );

  return <>{display}</>;
}

export default UserProfile;
