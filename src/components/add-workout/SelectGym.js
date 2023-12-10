import React from "react";

export default function SelectGym(props){
  const gyms = props.gyms
  return(
    <div className = "form-row">
        <label htmlFor="gym">
          Gym
        </label>
        <select
        onChange = {props.handleChange}
        name="gym_id"
        value={props.formData.gym_id || ""}
        >
        <option value="" disabled>Select a gym</option>
        { gyms.map((gym) => {
          return(
          <option
          key = {gym.id}
          value={gym.id}>
            {gym.name}
          </option>
          )
          })
        }
        </select>
    </div>
  )
}
