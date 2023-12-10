import React from "react";
import Workout from "./Workout.js";
import Form from "./Form.js";
import AddWorkout from "./AddWorkout.js";
export default function Container() {
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
    <div>
    <Form
    handleSubmit={addEmail}
    userID = {userID}
    />
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
  )
}
