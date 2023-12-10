import React from "react";
import Workout from "./Workout.js";
import Form from "./Form.js";
import AddWorkout from "./AddWorkout.js";
export default function WorkoutContainer() {
  const [userEmail, setUserEmail] = React.useState("")
  function addEmail(formData) {
    setUserEmail(formData.email)
  }

  return (
    <div>
    <Form
    handleSubmit={addEmail}
    />
    <Workout
    userEmail = {userEmail}
    />
    {userEmail&&
    <AddWorkout/>}
    {/* THIS DOESN'T CHECK FOR VALIDITY */}
    </div>
  )
}
