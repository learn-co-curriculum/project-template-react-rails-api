import React, { useEffect, useState } from "react";
import ConcertCard from "./ConcertCard";
import { Flex, Button } from "@mantine/core";


const ConcertContainer = ( {user, bands, concerts, setConcerts, displayedVenues, setVenues, handleNewStub, showUserConcerts, setShowUserConcerts} ) => {

  const [newLocation, setNewLocation] = useState("")
  const [explore, setExplore] = useState(false)

  console.log(showUserConcerts)
  console.log(user)
  console.log(explore)

  // Filter bands by user's favorite genres
  // const filteredBands = bands.filter((band) => {
  //   return (
  //     user.genre_1 === band.genre ||
  //     user.genre_2 === band.genre ||
  //     user.genre_3 === band.genre ||
  //     user.genre_1 === band.secondary_genre ||
  //     user.genre_2 === band.secondary_genre ||
  //     user.genre_3 === band.secondary_genre
  //   );
  // });

  // Filter concerts by user location
  const filteredConcerts = concerts.filter((concert) => {
    return user.location === concert.venue.state;
  });

  // Explore concerts in other states
  const filteredExploreConcerts = concerts.filter((concert) => {
    return concert.venue.state === newLocation;
  });

  const exploreSelect = (
    <select
      type="text"
      onChange={(e) => setNewLocation(e.target.value) & setExplore(true) & setShowUserConcerts(false)}
    >
      <option value="">{user ? user.location : "Choose a state"}</option>
      <option value="AK">AK</option>
      <option value="AL">AL</option>
      <option value="AR">AR</option>
      <option value="AZ">AZ</option>
      <option value="CA">CA</option>
      <option value="CO">CO</option>
      <option value="CT">CT</option>
      <option value="DC">DC</option>
      <option value="DE">DE</option>
      <option value="FL">FL</option>
      <option value="GA">GA</option>
      <option value="HI">HI</option>
      <option value="IA">IA</option>
      <option value="ID">ID</option>
      <option value="IL">IL</option>
      <option value="IN">IN</option>
      <option value="KS">KS</option>
      <option value="KY">KY</option>
      <option value="LA">LA</option>
      <option value="MA">MA</option>
      <option value="MD">MD</option>
      <option value="ME">ME</option>
      <option value="MI">MI</option>
      <option value="MN">MN</option>
      <option value="MO">MO</option>
      <option value="MS">MS</option>
      <option value="MT">MT</option>
      <option value="NC">NC</option>
      <option value="ND">ND</option>
      <option value="NE">NE</option>
      <option value="NH">NH</option>
      <option value="NJ">NJ</option>
      <option value="NM">NM</option>
      <option value="NV">NV</option>
      <option value="NY">NY</option>
      <option value="OH">OH</option>
      <option value="OK">OK</option>
      <option value="OR">OR</option>
      <option value="PA">PA</option>
      <option value="RI">RI</option>
      <option value="SC">SC</option>
      <option value="SD">SD</option>
      <option value="TN">TN</option>
      <option value="TX">TX</option>
      <option value="UT">UT</option>
      <option value="VA">VA</option>
      <option value="VT">VT</option>
      <option value="WA">WA</option>
      <option value="WI">WI</option>
      <option value="WV">WV</option>
      <option value="WY">WY</option>
    </select>
  );

  // Concerts outside of user's state

  const exploreConcerts = filteredExploreConcerts.map((concert) => {
    return (
      <ConcertCard
        key={concert.id}
        id={concert.id}
        date={concert.date}
        band={concert.band.name}
        band_id={concert.band.id}
        image={concert.band.image_url}
        venue_id={concert.venue.id}
        venue_name={concert.venue.name}
        venue_city={concert.venue.city}
        tickets_remaining={concert.tickets_remaining}
        ticket_link={concert.ticket_link}
        comment={concert.comment}
        user={user}
        handleNewStub={handleNewStub}
      />
    );
  });

  // Concerts in the user's state and matches favorite genres

  const userConcerts = filteredConcerts.map((concert) => {
    return (
      <ConcertCard
        key={concert.id}
        id={concert.id}
        date={concert.date}
        band={concert.band.name}
        band_id={concert.band.id}
        image={concert.band.image_url}
        user={user}
        venue_name={concert.venue.name}
        venue_id={concert.venue.id}
        venue_city={concert.venue.city}
        venue_state={concert.venue.state}
        tickets_remaining={concert.tickets_remaining}
        ticket_link={concert.ticket_link}
        comment={concert.comment}
      />
    );
  });

  // Render all concerts
  const allConcerts = concerts.map((concert) => {
    return (
      <ConcertCard
        key={concert.id}
        id={concert.id}
        date={concert.date}
        band={concert.band.name}
        band_id={concert.band.id}
        image={concert.band.image_url}
        user={user}
        venue_name={concert.venue.name}
        venue_id={concert.venue.id}
        venue_city={concert.venue.city}
        venue_state={concert.venue.state}
        tickets_remaining={concert.tickets_remaining}
        ticket_link={concert.ticket_link}
        comment={concert.comment}

        />
    )
  })

  

  return (
    <Flex>
    <div>
      { user ? <h3>Here's what's coming up in {showUserConcerts ? user.location : newLocation}</h3> : null }
      <h4>Explore what's happening in {exploreSelect}</h4>
      <div className='flex-parent'>
      {user && showUserConcerts ? userConcerts || allConcerts : exploreConcerts}
      {explore && !showUserConcerts ? exploreConcerts : userConcerts}
      {!user && !explore ? allConcerts : exploreConcerts}
      </div>
    </div>
    </Flex>
  )};

export default ConcertContainer;
