import React, { useEffect } from "react"
import WorkoutList from "./WorkoutList"

export default function WorkoutContainer(props) {

  return(
    <div>

      {props.workouts ?
      <div> <h2>Your recent workouts:</h2><WorkoutList workouts={props.workouts}/></div>
      :
      (<h2>Enter your email to see your recent workouts</h2>)}
    </div>
  )
}
