import React, { useContext } from "react";
import SelectDate from "./add-workout/SelectDate.js";
import SelectGym from "./add-workout/SelectGym.js";
import AddExercise from "./add-workout/AddExercise.js";
import CurrentWorkout from "./CurrentWorkout.js";
import AddNotes from "./add-workout/AddNotes.js";
import { AuthContext } from "./AuthContext.js";

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
  const token = useContext(AuthContext)
  console.log("TOKEN:")
  console.log(token)

  function updateForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  React.useEffect(() => {
    fetch("http://localhost:3000/gyms",
    {
      headers: {
        'Authorization': `Bearer ${token.token}`
      }
    }
    )
      .then((r) => r.json())
      .then((data) => {
        setGyms(data);
      });
    fetch("http://localhost:3000/movements",
    {
      headers: {
        'Authorization': `Bearer ${token.token}`
      }
    }
    )
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
        'Authorization': `Bearer ${token.token}`
      },
      body: JSON.stringify({
        workout:{
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
        gym_id: parseInt(formData.gym_id)
      }
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


  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add your latest workout!</h2>
      <form className="space-y-4" onSubmit={addWorkout}>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium mb-1">Tell us how it was!</h3>
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            <SelectDate formData={formData} handleChange={updateForm} />
            <SelectGym formData={formData} handleChange={updateForm} gyms={gyms} />
          </div>
          <AddNotes formData={formData} setFormData={setFormData} handleChange={updateForm} />
        </div>
        <AddExercise formData={formData} setFormData={setFormData} movements={movements} />
        <div className="bg-white p-4 rounded-md shadow">
          <CurrentWorkout currentExercises={formData.exercises} movements={movements}  setFormData={setFormData}/>
          <button className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark">Submit</button>
        </div>
      </form>
    </div>
  );

}
