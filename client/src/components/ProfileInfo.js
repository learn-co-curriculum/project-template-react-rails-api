import React, { useState, useEffect } from "react";

function ProfileInfo({setcurrentUser, user, setUser}) {
    // const { username, email } = user;
  // const { name, email, address, age, verified, early, nightOwl, kid, emergency } = user;
  const [isShow, setShow] = useState(true);



  useEffect(() => {
    fetch(`/users/${user.id}`)
    .then(res => res.json())
    .then(data => {
      if(data.errors){
          console.log(data.errors);
      } else {
          setUser({address: data.address, image: data.image, name: data.name, age: data.age, early: data.early, nightOwl: data.nightOwl, emergency: data.emergency});
      }
    })
}, [])
  function handleSubmit(e){
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        if(data.errors){
            console.log(data.errors)
        } else {
            console.log("update success!:", data);

        }
    })
}

  function toggleShow() {
    setShow(!isShow);
  }

  return (
    <>
      <div className="template2">
        <div>
          <h2>Welcome! {username}</h2>
          <h2>{email}</h2>
          <img
            src={
              "https://assets.teenvogue.com/photos/586fb5d4f77a0c673d72629f/1:1/w_2417,h_2417,c_limit/GettyImages-165443495.jpg"
            }
            alt="alt"
          />
          <h2>
            {name} {age}
          </h2>
          <h2>{address}</h2>
          <h2>
            {early ? "🐓" : null} {nightOwl ? "🦉" : null}
          </h2>
          <h2>{emergency ? "🚨" : null}</h2>
        </div>
      </div>
      <div className="template4">
        {isShow ? (
          <button className="button2" onClick={toggleShow}>
            Edit Profile
          </button>
        ) : (
          <>
            <form onClick={handleSubmit}>
              <div className="setbutton">
                <input
                  className="data"
                  placeholder="Add Profile Picture"
                  type="url"
                  onChange={e => setUser({...user, image: e.target.value})}
                />
              </div>
              <div className="setbutton">
                <input
                  className="data"
                  placeholder="Add Your kid's name"
                  type="text"
                  onChange={e => setUser({...user, name: e.target.value})}

                />
                <input
                  className="data"
                  placeholder="Add Your kid's age"
                  type="number"
                  max="10"
                  onChange={e => setUser({...user, age: e.target.value})}

                />
                <input
                  className="data"
                  placeholder="Add Your address"
                  type="text"
                  onChange={e => setUser({...user, address: e.target.value})}

                />
              </div>
              <div id="checks">
                <label>🐓</label>
                <input
                  className="data"
                  placeholder="Are You an early bird? 🐓"
                  type="checkbox"
                  value="🐓"
                  onChange={e => setUser({...user, early: e.target.value})}
                />
                <label>🦉</label>
                <input
                  className="data"
                  placeholder="Are You a night owl? 🦉"
                  type="checkbox"
                  value="🦉"
                  onChange={e => setUser({...user, nightOwl: e.target.value})}
                />
                <label>🚨</label>
                <input
                  className="data"
                  placeholder="Are You able to provide help in an emergency ?"
                  type="checkbox"
                  value="🚨"
                  onChange={e => setUser({...user, emergency: e.target.value})}
                />
              </div>
              <input type="submit" 
            value="Save" 
            className="button2" 
            />
            </form>
          </>
        )}
      </div>
    </>
  );
}
export default ProfileInfo;



// user story is to update user in backend, show update on handleFrontEnd

// we need to collect users data (form)
// we need to send users data to backend (patch fetch to '/users/:id')
// we need to make sure user updates 
// we need to show user updates on frontend

// ties into user can view their up to date profile