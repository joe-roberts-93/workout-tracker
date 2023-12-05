import React from "react"

export default function UserWorkout() {
  const [userData, setUserData] = React.useState([])

  React.useEffect(function() {
  fetch('http://localhost:3000/users/')
      .then(res => res.json())
      .then(data => {setUserData(data)
}) }, [])
}
