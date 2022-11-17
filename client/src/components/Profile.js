import React from "react";
import StubContainer from "./StubContainer";
import UpcomingConcerts from "./UpcomingConcerts";
import FavoritesContainer from "./FavoritesContainer";
import UpdateProfileForm from "./UpdateProfileForm";
import { Button } from '@mantine/core';
import { useState } from "react";

const Profile = ({ user }) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <h2 className='page-header'>{user.first_name}'s profile</h2>
      <h4>
        See your concert stubs, your upcoming concerts, and your favorites!
      </h4>
      <FavoritesContainer
        genre_1={user.genre_1}
        genre_2={user.genre_2}
        genre_3={user.genre_3}
        favorite_band={user.favorite_band}
      />
      <StubContainer user={user} />
      <div className="update-profile">
        <Button onClick={() => setShow((show) => !show)} variant="light" color="red" fullWidth mt="md" radius="md"> {show ? "Update Profile" : "Cancel Update"}
        </Button>
        {show ? <UpdateProfileForm /> : null}
        {/* <UpcomingConcerts user={user}/> */}
      </div>
    </div>
  );
};

export default Profile;
