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
    const updatedExercises = [...props.formData.exercises, exercise];
    props.setFormData({
      ...props.formData,
      exercises: updatedExercises
    })
    document.querySelector("#add-another-exercise").classList.remove("hidden")
    event.target.disabled = true
    event.target.innerText = "Exercise Added"
    event.target.classList.add("button-added")
  }

  function addAnotherExercise(event) {
    event.preventDefault()
    document.querySelector("#add-exercise").disabled = false
    document.querySelector("#add-exercise").innerText = "Add Exercise"
    document.querySelector("#add-exercise").classList.remove("button-added")
    document.querySelector("#add-another-exercise").classList.add("hidden")
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
    <div className="exercise-buttons">
      <button onClick={addExercise} id="add-exercise">Add Exercise</button>
      <button onClick={addAnotherExercise} id="add-another-exercise" className="hidden">Add another exercise</button>
    </div>
    </div>
    )
}
