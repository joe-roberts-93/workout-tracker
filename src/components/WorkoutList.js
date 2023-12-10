import React from 'react'
import WorkoutExercises from './WorkoutExercises'

export default function WorkoutList(workouts) {
  return(
    <div>
      {workouts.workouts.map(workout => {
        const timeOfWorkout = new Date(workout.created_at).toLocaleString()
        const workoutExercises = workout.exercises.map(exercise => {
          return(
          <WorkoutExercises
          key={exercise.id}
          name={exercise.movement.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
          />
        )})
        return (
          <div key = {workout.id}>
            <h3>Your workout on {timeOfWorkout}</h3>
            {workoutExercises}
          </div>
        )
      })}
    </div>
  )
}
