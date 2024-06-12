import React from "react";

export default function SelectDate(props){
  return(
    <div className = "select-date">
      <div className="form__row">
          <label htmlFor="date">
            Date
          </label>
          <input
          type="date"
          name="date"
          value={props.formData.date || ""}
          onChange={props.handleChange}
          />
        </div>
        <div className="form__row">
          <label htmlFor="time">
            Time
          </label>
          <input
          type="time"
          name="time"
          value={props.formData.time || ""}
          onChange={props.handleChange}
          />
        </div>
    </div>
  )
}
