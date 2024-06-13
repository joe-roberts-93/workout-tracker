import React, {useState} from 'react'
import WorkoutExercises from './WorkoutExercises'
import formatDateAndTime from '../helpers/formatDateAndTime';

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
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h2 className="text-lg font-bold mb-4">Your Workouts</h2>
      {workouts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {workouts.map(workout => {
            const dateOfWorkout = new Date(workout.date);
            const timeOfWorkout = new Date(workout.time);
            const formattedDate = formatDateAndTime(dateOfWorkout, timeOfWorkout);
            const exercises = workout.exercises
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
              <div key={workout.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-medium mb-2">Your workout on {formattedDate}</h3>
                <div className="flex flex-col gap-4">
                  {workoutExercises}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p>No workouts available.</p>
      )}
    </div>
  )
}
