import React from "react";
import SelectMovement from "./SelectMovement.js"
export default function AddExercise(props) {
  const [exercise, setExercise] = React.useState({
    movement_id: "",
    sets: "",
    reps: "",
    weight: ""
  })

  function addExercise(event) {
    event.preventDefault()
    props.formData.exercises.push(exercise)
    event.target.disabled = true
    event.target.innerText = "Added"
    event.target.classList.add("button-added")
  }

  function handleChange(event) {
    const {name, value} = event.target
    setExercise(prevExercise => ({
        ...prevExercise,
        [name]: value,
      }))
    }
    return(
    <div>
    <h3>Build your Workout</h3>
    <SelectMovement
    movements = {props.movements}
    exerciseData = {exercise}
    handleChange = {handleChange}
    />
    <button onClick={addExercise}>Add Exercise</button>
    </div>
    )
}
