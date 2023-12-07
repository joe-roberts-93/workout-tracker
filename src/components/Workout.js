import React from "react"
import WorkoutList from "./WorkoutList"

export default function WorkoutContainer(props) {
    const [workouts, setWorkouts] = React.useState([])
    const userEmail = props.userEmail

  React.useEffect(function() {
      const url = `http://localhost:3000/users/find_by_email?email=${userEmail}`
      console.log(`your api route is ${url}`)
      fetch(url)
          .then(res => res.json())
          .then(data => {setWorkouts(data.workouts)})
  }, [userEmail])

  return(
    <div>
      {workouts ?
      <div> <h2>Your recent workouts:</h2><WorkoutList workouts={workouts}/></div>
      :
      (<h2>Enter your email to see your recent workouts</h2>)}
    </div>
  )
}
