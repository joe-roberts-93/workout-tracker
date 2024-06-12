import React, {useState} from 'react'
import WorkoutExercises from './WorkoutExercises'

export default function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const token = localStorage.getItem('token');

  React.useEffect(function() {
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    const url = `http://localhost:3000/workouts`
    fetch(url, config)
        .then(res => res.json())
        .then(data => setWorkouts(data))
        .catch(error => console.error('Error fetching workouts:', error))
  }
  , [token])

  console.log(workouts)
  return(
    <div className="workout-list">
    {workouts.length > 0 && workouts.map(workout => {
      const dateOfWorkout = new Date(workout.date).toDateString()
      const timeOfWorkout = new Date(workout.time).toLocaleTimeString()
      const exercises = workout.exercises
      console.log(exercises)
      const workoutExercises = exercises.map(exercise => {
        return (
          <WorkoutExercises
            key={exercise.id}
            name={exercise.movement.name}
            sets={exercise.sets}
            reps={exercise.reps}
            weight={exercise.weight}
          />
        )
      })
      return (
        <div key={workout.id} className="list-workouts">
          <h3>Your workout at {timeOfWorkout} on {dateOfWorkout}</h3>
          {workoutExercises}
        </div>
      )
    })}
  </div>
  )
}
