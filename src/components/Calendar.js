import React from 'react';
import ConsistencyCalendar from './ConsistencyCalendar';
import Nav from './Nav';

export default function Calendar(props){
  return(
    <div>
      <Nav />
      <h2>Check out how often you've worked out this year!</h2>
      <h2
      style={{color: "red"}}
      >This section needs to take user data</h2>
      <div className = "calendar">
        <ConsistencyCalendar
        workouts = {props.workouts}
        />
      </div>
    </div>
  )
}
