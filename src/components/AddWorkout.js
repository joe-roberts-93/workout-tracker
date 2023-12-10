import React from "react";
import SelectDate from "./add-workout/SelectDate.js";
import SelectGym from "./add-workout/SelectGym.js";
import AddExercise from "./add-workout/AddExercise.js";

export default function AddWorkout(){
  const [gyms, setGyms] = React.useState([]);
  const [movements, setMovements] = React.useState([]);
  const [formData, setFormData] = React.useState({
    date: "",
    gym_id: "",
    exercises: []
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

  return(
    <div>
      <h2>Add Workout</h2>
      <form
      onSubmit={event => {
        event.preventDefault()
        console.log(formData)
      }}
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
        movements={movements}
        />
                <AddExercise
        formData={formData}
        movements={movements}
        />
                <AddExercise
        formData={formData}
        movements={movements}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
