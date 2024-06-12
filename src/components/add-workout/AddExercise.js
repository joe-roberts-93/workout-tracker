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
    if (exercise.movement_id === ""){
      alert("Woah there! You haven't picked a movement yet!")
      return
    }
    else{
    const updatedExercises = [...props.formData.exercises, exercise];
    props.setFormData({
      ...props.formData,
      exercises: updatedExercises
    })
    setExercise({
      movement_id: "",
      sets: "",
      reps: "",
      weight: ""
    })
  }
  }

  function handleChange(event) {
    const {name, value} = event.target
    const updatedValue = name === 'movement_id' ? parseInt(value, 10) : value;
    setExercise(prevExercise => ({
      ...prevExercise,
      [name]: updatedValue
       }))
    }
    return(
    <div className = "add-exercise-container">
    <h3>Add an exercise to your workout</h3>
    <SelectMovement
    movements = {props.movements}
    exerciseData = {exercise}
    handleChange = {handleChange}
    />
    <div className="exercise-buttons">
      <button onClick={addExercise} id="add-exercise-button">
        Add this to your workout <img src = "plus-sign.svg" alt="plus sign" className="plus-sign"/>
      </button>
    </div>
    </div>
    )
}
