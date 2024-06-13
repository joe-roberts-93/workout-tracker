import './App.css';
import React,{createContext} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import Gyms from './components/Gyms';
import AddWorkout from './components/AddWorkout';
import WorkoutList from './components/WorkoutList';
import { AuthProvider } from './components/AuthContext';
// import Calendar from './components/Calendar';


// function App() {
//   return (
//     <div className="App">
//
//     {/* insert nav below */}
//     <h1>Welcome to WorkoutTracker!</h1>
//     <RouterProvider router={router}>
//       {/* <p>
//         <br></br>Currently the calendar shows the year to date</p>
//         <p>Could structure with grid and columns for each month, add class</p> */}
//     {/* THIS DOESN'T CHECK FOR VALIDITY */}
//     </RouterProvider>
//     </div>
//   );
// }
// Create a context for authentication


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
          path = "/gyms"
          element={
            <PrivateRoute>
              <Gyms />
            </PrivateRoute>
          }
          />
          <Route
          path = "/workouts"
          element={
            <PrivateRoute>
              <WorkoutList />
            </PrivateRoute>
          }
          />
          <Route
          path= "/addworkout"
          element={
            <PrivateRoute>
              <AddWorkout />
            </PrivateRoute>
          }
          />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;


// export default App;
