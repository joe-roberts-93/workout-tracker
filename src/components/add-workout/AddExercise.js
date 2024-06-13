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
      <div className="bg-white p-4 rounded-md shadow mb-4">
        <h3 className="text-lg font-medium mb-1">Add an exercise to your workout:</h3>
        <SelectMovement
          movements = {props.movements}
          exerciseData = {exercise}
          handleChange = {handleChange}
        />
        <div className="flex justify-end">
          <button onClick={addExercise} className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark">
            Add this to your workout
          </button>
        </div>
      </div>
    )
}
