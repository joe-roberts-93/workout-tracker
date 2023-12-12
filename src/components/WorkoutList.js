import React from 'react'
import WorkoutExercises from './WorkoutExercises'

export default function WorkoutList(workouts) {
  return(
    <div className="workout-list">
      {workouts.workouts.map(workout => {
        const dateOfWorkout = new Date(workout.date).toDateString()
        const timeOfWorkout = new Date(workout.time).toLocaleTimeString()
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
          <div key = {workout.id} className = "list-workouts">
            <h3>Your workout at {timeOfWorkout} on {dateOfWorkout}</h3>
            {workoutExercises}
          </div>
        )
      })}
    </div>
  )
}
