import React from "react";
import capitalize from "../../helpers/capitalize.js"
export default function SelectMovement(props){
  const movements = props.movements
  return (
    <div className = "form-row">
          <label htmlFor="movement">
            Movement
          </label>
          <select
          onChange = {props.handleChange}
          name = "movement_id"
          value = {props.exerciseData.movement_id || ""}
          required = {true}
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
          <label htmlFor="sets">  Sets</label>
          <input
          type="number"
          name="sets"
          value={props.exerciseData.sets}
          onChange={props.handleChange}
          ></input>
          <label htmlFor="reps">  Reps</label>
          <input
          type="number"
          name="reps"
          value={props.exerciseData.reps}
          onChange={props.handleChange}
          ></input>
          <label htmlFor="weight">  Weight</label>
          <input
          type="number"
          name="weight"
          value={props.exerciseData.weight}
          onChange={props.handleChange}
          ></input>
        </div>
  )
}
