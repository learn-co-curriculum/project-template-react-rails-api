import React from 'react'
import StubContainer from './StubContainer'
import UpcomingConcerts from './UpcomingConcerts'
import FavoritesContainer from './FavoritesContainer'

const Profile = ({user}) => {
  // const [{ data: episode, error, status }, setUser] = useState({
  //   data: null,
  //   error: null,
  //   status: "pending",
  // });
  // const { id } = useParams();

  // useEffect(() => {
  //   fetch(`/users/${id}`).then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) =>
  //         setUser({ data: episode, error: null, status: "resolved" })
  //       );
  //     } else {
  //       r.json().then((err) =>
  //         setEpisode({ data: null, error: err.error, status: "rejected" })
  //       );
  //     }
  //   });
  // }, [id]);

  return (
    <div>
      <h2>Profile</h2>
      <h4>See your concert stubs, your upcoming concerts, and your favorites!</h4>
      <UpcomingConcerts />
      <FavoritesContainer />
      <StubContainer />
    </div>
  )
}

export default Profile
