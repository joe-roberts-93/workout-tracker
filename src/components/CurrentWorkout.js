import React from "react";
import capitalize from "../helpers/capitalize";

export default function CurrentWorkout(props){
  const [currentExercises, setCurrentExercises] = React.useState([])
  React.useEffect(() => {
    setCurrentExercises(props.currentExercises)
  }, [props.currentExercises])
  const exerciseList = currentExercises?.length > 0 ? (currentExercises.map((exercise, index) => {
    const movement_name = (props.movements.find(movement => movement.id === parseInt(exercise.movement_id))).name
    return(
    <div key={index}>
      <h4>{capitalize(movement_name)}</h4>
      <p>{exercise.sets} sets of {exercise.reps} reps</p>
      <p>Weight:{exercise.weight} kg</p>
    </div>
    )
  }
  ) ) : "No exercises added yet"
  return(
    <div>
      <h2>Current Workout</h2>
        {exerciseList}
    </div>
  )
}
