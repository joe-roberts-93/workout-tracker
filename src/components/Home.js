import React from "react";
import RegistrationForm from "./RegistrationForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center container px-40 py-6">
      <h2>Welcome to Workout Tracker, your ultimate fitness buddy!</h2>
      <img src="./star-logo.png" alt="the logo for this application" className="h-40 w-40"/>
        <p>Ready to flex
        those muscles and track your progress with a smile? Whether you're a gym
        newbie or a seasoned sweat warrior, we’ve got your back (and biceps).</p>
        <p>Our fun and easy-to-use app helps you log your workouts, celebrate your
        victories, and smash your fitness goals like a pro.</p>
      {!localStorage.token &&
      <>
      <p>So, what are you waiting for? Let's get moving! Sign up today and
        join the fun, or log in to continue your fitness journey.
        Remember, the only bad workout is the one that didn’t happen! </p>
       <RegistrationForm/>
      </>
       }
    </div>
  );
}
