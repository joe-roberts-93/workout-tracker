import React from "react";

export default function AddNotes(props) {
  return (
    <div className="form__row add-notes">
      <label htmlFor="notes">Notes</label>
      <input
        type="text"
        name="notes"
        value={props.formData.notes}
        onChange={props.handleChange}
      ></input>
    </div>
  );
}
