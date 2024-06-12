import Form from './Form';
import ConsistencyCalendar from './ConsistencyCalendar';
import AddWorkout from './AddWorkout';
import Nav from './Nav';

export default function Home(){
  const [userEmail, setUserEmail] = React.useState("")
  const [userID, setUserID] = React.useState(0)
  const [workouts, setWorkouts] = React.useState([])
  function addEmail(formData) {
    setUserEmail(formData.email)
  }

// Here I'm going to log the user in. I'm going to make a fetch request to my Rails API to get the user's data. I'm going to use the useEffect hook to make the fetch request when the userEmail state changes. I'm also going to use the useState hook to store the user's email, id, and workouts.
React.useEffect(function() {

      const url = `http://localhost:3000/users/find_by_email?email=${userEmail}`
      fetch(url)
          .then(res => res.json())
          .then(data => {setUserID(data.id)
            setWorkouts(data.workouts)})
  }, [userEmail])

return (
<div>
  <Nav />
    <div>
    <h2>Check out how often you've worked out this year!</h2>
    <div class = "calendar">
      <ConsistencyCalendar
      workouts = {workouts}
      />
    </div>
    </div>

  {/* <Workout
  userEmail = {userEmail}
  userID = {userID}
  workouts = {workouts}
  /> */}
  {userEmail&&
  <AddWorkout
  userID = {userID}
  />}
</div>

)
  }
