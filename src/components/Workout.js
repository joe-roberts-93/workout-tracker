import WorkoutList from "./WorkoutList"

export default function WorkoutContainer(props) {

  function recentWorkouts(workouts){
    if (workouts.length < 3) {
      return workouts
    }
    else {
      return workouts.slice(-3)
    }
  }

  return(
    <div>
      {props.workouts ?
      <div> <h2>Your most recent workouts:</h2><WorkoutList workouts={recentWorkouts(props.workouts)}/></div>
      :
      (<h2>Enter your email to see your recent workouts</h2>)}
    </div>
  )
}
