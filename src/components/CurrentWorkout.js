import React from "react";
import SelectMovement from "./add-workout/SelectMovement";

export default function CurrentWorkout(props) {
  const [editingExercise, setEditingExercise] = React.useState(null);

  function handleEditExercise(exercise) {
    setEditingExercise(exercise);
  }

  function handleRemoveExercise(index) {
    const updatedExercises = [...props.currentExercises];
    updatedExercises.splice(index, 1);
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      exercises: updatedExercises,
    }));
  }

  function handleSaveExercise(exercise) {
    const updatedExercises = props.currentExercises.map((e) => {
      if (e === editingExercise) {
        return exercise;
      }
      return e;
    });
    props.setFormData((prevFormData) => ({
      ...prevFormData,
      exercises: updatedExercises,
    }));
    setEditingExercise(null);
  }

  return (
    <div className="current-workout-container">
      <h3>Current Workout:</h3>
      {props.currentExercises.map((exercise, index) => (
        <div key={index} className="exercise-container">
          {editingExercise === exercise ? (
            <EditExercise
              exercise={exercise}
              movements={props.movements}
              onSave={handleSaveExercise}
              onCancel={() => setEditingExercise(null)}
            />
          ) : (
            <div className="exercise-details">
              <p>
                {props.movements.find((m) => m.id === exercise.movement_id).name}
              </p>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Weight: {exercise.weight}</p>
              <button onClick={() => handleEditExercise(exercise)}>Edit</button>
              <button onClick={() => handleRemoveExercise(index)}>Remove</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function EditExercise(props) {
  const [exercise, setExercise] = React.useState(props.exercise);

  function handleChange(event) {
    const { name, value } = event.target;
    const updatedValue = name === "movement_id" ? parseInt(value, 10) : value;
    setExercise((prevExercise) => ({
      ...prevExercise,
      [name]: updatedValue,
    }));
  }

  function handleSave() {
    props.onSave(exercise);
  }

  return (
    <div className="edit-exercise-container">
      <SelectMovement
        movements={props.movements}
        exerciseData={exercise}
        handleChange={handleChange}
      />
      <div className="exercise-inputs">
        <label>Sets:</label>
        <input type="number" name="sets" value={exercise.sets} onChange={handleChange} />
        <label>Reps:</label>
        <input type="number" name="reps" value={exercise.reps} onChange={handleChange} />
        <label>Weight:</label>
        <input type="number" name="weight" value={exercise.weight} onChange={handleChange} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={props.onCancel}>Cancel</button>
    </div>
  );
}
