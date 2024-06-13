import React from "react";
import capitalize from "../../helpers/capitalize.js"
export default function SelectMovement(props){
  const movements = props.movements
  return (
    <div>
      <div className="mb-1">
        <label htmlFor="movement" className="block text-sm font-medium text-gray-700">Movement</label>
        <select
          onChange = {props.handleChange}
          name = "movement_id"
          value = {props.exerciseData.movement_id || ""}
          className="workout-input"
        >
          <option value="" disabled>Select a movement</option>
          { movements.map((movement) => {
            return(
            <option
            key = {movement.id}
            value={movement.id}
            >
              {capitalize(movement.name)}
            </option>
            )
            })
          }
        </select>
      </div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        <div>
          <label htmlFor="sets" className="block text-sm font-medium text-gray-700">Sets</label>
          <input
            type="number"
            name="sets"
            value={props.exerciseData.sets}
            onChange={props.handleChange}
            className="workout-input"
          ></input>
        </div>
        <div>
          <label htmlFor="reps" className="block text-sm font-medium text-gray-700">Reps</label>
          <input
            type="number"
            name="reps"
            value={props.exerciseData.reps}
            onChange={props.handleChange}
            className="workout-input"
          ></input>
        </div>
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
          <input
            type="number"
            name="weight"
            value={props.exerciseData.weight}
            onChange={props.handleChange}
            className="workout-input"
          ></input>
        </div>
      </div>
    </div>
  )
}
