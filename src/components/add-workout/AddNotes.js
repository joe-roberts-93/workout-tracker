import React from "react";

export default function AddNotes(props) {
  return (
    <div>
      <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
        Notes
      </label>
      <input
        type="text"
        name="notes"
        value={props.formData.notes}
        onChange={props.handleChange}
        className="workout-input"
      />
    </div>
  );

}
