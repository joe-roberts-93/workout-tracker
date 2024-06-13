import React from "react";

export default function SelectDate(props){
  return(
    <div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input
          type="date"
          name="date"
          value={props.formData.date || ""}
          onChange={props.handleChange}
          className="workout-input"
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="time"
          name="time"
          value={props.formData.time || ""}
          onChange={props.handleChange}
          className="workout-input"
        />
      </div>
    </div>
  )
}
