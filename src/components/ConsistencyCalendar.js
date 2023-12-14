import React from "react";
import dayOfYear from "../helpers/dayOfYear";
export default function ConsistencyCalendar(props) {
  const calendar = []
  const today = new Date()
  const todayAsInt = dayOfYear(today)
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
  for (let i = 0; i<= todayAsInt-1; i++)
  {
    let calendarDate = new Date()
    calendarDate.setDate(calendarDate.getDate() - (todayAsInt-1 - i))
    calendar.push({date: calendarDate.toLocaleDateString(
      'en-GB'), workedOut: false, today: false, month: months[calendarDate.getMonth()]
    })
  }
  if (props.workouts){
    const workoutDays = props.workouts.map((workout) => {
      const year = workout.date.slice(0,4)
      const month = workout.date.slice(5,7)
      const day = workout.date.slice(8,10)
      return {date: `${day}/${month}/${year}`, workedOut: true, month: months[month]}
    })
    workoutDays.forEach((workoutDay) => {
      calendar.forEach((day) => {
        if (workoutDay.date === day.date){
          day.workedOut = true}
        if (day.date === today.toLocaleDateString('en-GB')){
            day.today = true
      }
      })
    })
    }
  return(
    calendar.map((day) => {
      return(
        <div
        className = {day.workedOut ? `workout-day day ${day.month}` : `rest-day day ${day.month}`}
        id = {day.today ? "today" : null}
        key = {day.date}
        >
          {/* Show a tooltip on hover */}
        <span className="tooltiptext">{day.date}</span>
        </div>
      )
      // Add a class corresponding to the month
    }
  )
  )
}
