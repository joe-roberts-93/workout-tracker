import Workout from "./Workout.js";
import Form from "./Form.js";
import React from "react";
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
    </div>
  )
}
