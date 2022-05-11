import React, {useState} from 'react'


function ProfileInfo({user}) {
    const { name, email, address, image, age, verified, early, nightOwl, kid, emergency } = user;
    const [isShow , setShow] = useState(false);
  
    function toggleShow() {
      setShow(!isShow)
    } 

    return (
        <div className="profile-info">
            <div>
                <h1>Welcome! {name}</h1>
                <h2>{email}</h2>
                <img src={image} alt="alt" />
                <h2>{kid} {age}</h2>
                <h2>{address}</h2>
                <h2>{early ? '🐓' : null}    {nightOwl ? '🦉' : null} </h2>
                <h2>{verified ? '✅' : null}</h2>
                <h2>{emergency ? '🚨' : null}</h2>
            </div>

            {isShow ?   
            <button  onClick={toggleShow}>Edit Profile</button> : 
             <div>
                <form>
                    <label>
                       Add Profile Picture
                        <input type="file" />
                    </label>
                    <label>
                        Add Your kid's name and age
                        <input type="text" />
                        <input type="number" />
                    </label>
                    <label>
                        Add Your address
                        <input type="text" />
                    </label>
                    <label>
                       Are You an early bird or late night owl ?
                        <input type="checkbox" value="🐓"/>
                        <input type="checkbox" value="🦉"/>
                    </label>
                    <label>
                        Are You able to provide help in an emergency ?
                        <input type="checkbox" value="🚨"/>
                    </label>
                    <label>
                        To get Varified upload an ID/Driver's license
                        <input type="file" />
                    </label>
                </form>
             <button onClick={toggleShow}>Save</button>
             </div>
             }
             
             

        </div>
    )
}
export default ProfileInfo;