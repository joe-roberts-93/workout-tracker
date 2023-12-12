import React from "react";
import SelectDate from "./add-workout/SelectDate.js";
import SelectGym from "./add-workout/SelectGym.js";
import AddExercise from "./add-workout/AddExercise.js";
import CurrentWorkout from "./CurrentWorkout.js";
import AddNotes from "./add-workout/AddNotes.js";

export default function AddWorkout(props){
  const [gyms, setGyms] = React.useState([]);
  const [movements, setMovements] = React.useState([]);
  const [formData, setFormData] = React.useState({
    date: "",
    gym_id: "",
    exercises: [],
    notes: "",
    time: ""
  });

  function updateForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  React.useEffect(() => {
    fetch("http://localhost:3000/gyms")
      .then((r) => r.json())
      .then((data) => {
        setGyms(data);
      });
    fetch("http://localhost:3000/movements")
      .then((r) => r.json())
      .then((data) => {
        setMovements(data);
      });
  }, []);

  function addWorkout(event) {
    event.preventDefault();
    fetch("http://localhost:3000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
        gym_id: parseInt(formData.gym_id),
        user_id: props.userID,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to create workout: ${response.statusText}`);
        }
        return response.json();
      })
      .then((workoutData) => {
        console.log("Workout created:", workoutData);
        const workoutID = parseInt(workoutData.id);
        formData.exercises.forEach((exercise) => {
          exercise.exerciseable_id = workoutID;
          exercise.exerciseable_type = "Workout";
          fetch("http://localhost:3000/exercises", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              exercise
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to create exercise: ${response.statusText}`);
              }
              return response.json();
            })
            .then((exerciseData) => {
              console.log("Exercise created:", exerciseData);
            })
            .catch((error) => {
              console.error("Error creating exercise:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error creating workout:", error);
      });
    setFormData({ date: "", gym_id: "", exercises: [], notes: "", time: "" });
  }


  return(
    <div>
      <h2>Add Workout</h2>
      <form
      onSubmit={addWorkout}
      >
        <SelectDate
        formData={formData}
        handleChange={updateForm}/>
        <SelectGym
        formData={formData}
        handleChange={updateForm}
        gyms={gyms}/>
        <AddExercise
        formData={formData}
        setFormData={setFormData}
        movements={movements}
        />
        <CurrentWorkout
        currentExercises={formData.exercises}
        movements={movements}
        />
        <AddNotes
        formData={formData}
        setFormData={setFormData}
        handleChange={updateForm}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}


// Q. How do I set the formData back to the default state?
// A. setFormData to an empty object
