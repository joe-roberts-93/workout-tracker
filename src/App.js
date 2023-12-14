import './App.css';
import React from 'react';
// import Nav from './components/Nav';
import Form from './components/Form';
import Workout from './components/Workout';
import AddWorkout from './components/AddWorkout';
import ConsistencyCalendar from './components/ConsistencyCalendar';


function App() {

  const [userEmail, setUserEmail] = React.useState("")
  const [userID, setUserID] = React.useState(0)
  const [workouts, setWorkouts] = React.useState([])
  function addEmail(formData) {
    setUserEmail(formData.email)
  }

  React.useEffect(function() {
    const url = `http://localhost:3000/users/find_by_email?email=${userEmail}`
    fetch(url)
        .then(res => res.json())
        .then(data => {setUserID(data.id)
          setWorkouts(data.workouts)})
}, [userEmail])


  return (
    <div className="App">
      {/* <Nav/> */ }
      {/* this is a component that I'm not using right now */}
      <img src="./elf-logo.png" alt="the logo for this application" className="App-logo"/>
      <h1>Welcome to WorkoutTracker!</h1>
      <p>
        <br></br>Currently the calendar shows the year to date</p>
        <p>Could structure with grid and columns for each month, add class</p>
    <Form
    handleSubmit={addEmail}
    userID = {userID}
    />


    {
      userEmail&&
      <div>
      <h2>Your workouts so far this year</h2>
      <div class = "calendar">
        <ConsistencyCalendar
        workouts = {workouts}
        />
      </div>
      </div>
    }
    <Workout
    userEmail = {userEmail}
    userID = {userID}
    workouts = {workouts}
    />
    {userEmail&&
    <AddWorkout
    userID = {userID}
    />}
    {/* THIS DOESN'T CHECK FOR VALIDITY */}
    </div>
  );
}


export default App;
