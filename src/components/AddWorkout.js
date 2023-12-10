import React from "react";
import SelectDate from "./add-workout/SelectDate.js";
import SelectGym from "./add-workout/SelectGym.js";
import AddExercise from "./add-workout/AddExercise.js";
import CurrentWorkout from "./CurrentWorkout.js";

export default function AddWorkout(props){
  const [gyms, setGyms] = React.useState([]);
  const [movements, setMovements] = React.useState([]);
  const [formData, setFormData] = React.useState({
    date: "",
    gym_id: "",
    exercises: [],
    workoutID: "",
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
        gym_id: formData.gym_id,
        user_id: props.userID}),
    })
      .then((r) => r.json())
      .then((workoutData) => {
        console.log(workoutData);
        const workoutID = workoutData.id;
        formData.exercises.forEach((exercise) => {
          exercise.workout_id = workoutID;
          fetch ("http://localhost:3000/exercises", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            exercise
          }),
        })
          .then((r) => r.json())
          .then((exerciseData) => {
            console.log(exerciseData);
          });
        });
      });
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
        <button>Submit</button>
      </form>
    </div>
  )
}
