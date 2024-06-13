import React from 'react';
import capitalize from "../helpers/capitalize.js"
export default function workoutExercises(props) {
  return(
  <div key={props.id} className="bg-gray-100 p-4 rounded shadow mb-4">
    <h4 className="text-lg font-medium text-gray-900 mb-2">{capitalize(props.name)}</h4>
    <div className="flex flex-col gap-2">
      <p className="text-gray-600 text-sm font-medium">{props.sets} sets of {props.reps} reps</p>
      <p className="text-gray-600 text-sm font-medium">Weight: {props.weight} lbs</p>
    </div>
  </div>
  )
}
