import React from "react"
import WorkoutExercises from "./WorkoutExercises"

//q: how does my code look?
//a: good! you're doing a great job of breaking things down into components

//q: what did I learn?
//a: you learned how to use the useEffect hook to fetch data from an API

//q: how could I write cleaner code?
//a: you could use a ternary operator to render the WorkoutList component conditionally

export default function App() {
    const [userData, setUserData] = React.useState({})
    const [count, setCount] = React.useState(1)
    const [workouts, setWorkouts] = React.useState([])

    React.useEffect(function() {
        fetch(`http://localhost:3000/users/${count}`)
            .then(res => res.json())
            .then(data => {setUserData(data)
            return data})
            .then(data => {setWorkouts(data.workouts)})
    }, [count])

    const WorkoutList =  () => {
      return workouts.map(workout => {
        const timeOfWorkout = new Date(workout.created_at).toLocaleString()
        const workoutExercises = workout.exercises.map(exercise => {
          return(
          <WorkoutExercises
          name={exercise.movement.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
          />
        )})
        return (
          <div>
            <h1>Your workout on {timeOfWorkout}</h1>
            {workoutExercises}
          </div>
        )
    })
  }
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Workout</button>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
            <WorkoutList />
        </div>
    )
}
