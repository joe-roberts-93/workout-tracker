import React from 'react';
import capitalize from "../helpers/capitalize.js"
export default function workoutExercises(props) {
  return(
  <div key={props.id}>
            <h4>{capitalize(props.name)}</h4>
            <p>{props.sets} sets of {props.reps} reps</p>
            <p>Weight:{props.weight} lbs</p>
  </div>
  )
}
