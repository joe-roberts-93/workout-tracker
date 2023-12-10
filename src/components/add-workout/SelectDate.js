import React from "react";

export default function SelectDate(props){
  return(
    <div className = "form-row">
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
  )
}
