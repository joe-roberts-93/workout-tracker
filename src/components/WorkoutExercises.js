import React from 'react';
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default function workoutExercises(props) {
  console.log(props)
  return(
  <div key={props.id}>
            <h2>{capitalize(props.name)}</h2>
            <h3>{props.sets} sets of {props.reps} reps</h3>
            <h3>Weight: {props.weight} lbs</h3>
  </div>
  )
}
