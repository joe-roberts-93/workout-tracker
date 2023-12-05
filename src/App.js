import logo from './logo.svg';
import './App.css';
import Workout from "./components/Workout.js";
import Form from "./components/Form.js";
function App() {
  return (
    <div className="App">
      <h1>Welcome to WorkoutTracker!</h1>
      <Form/>
      <Workout/>
    </div>
  );
}

export default App;
