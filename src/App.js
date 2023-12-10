import './App.css';
import WorkoutContainer from './components/WorkoutContainer';

function App() {
  return (
    <div className="App">
      <img src="./elf-logo.png" alt="the logo for this application" className="App-logo"/>
      <h1>Welcome to WorkoutTracker!</h1>
      <h1>To do:</h1>
      <ul>
        <li>Add a button to add additional exercises</li>
        <li>Do more than just console log this</li>
        <li>Post this to the API</li>
        <li>Make the form more user-friendly</li>
        <li>Actually authenticate user and make sure exercises are valid</li>
      </ul>
      <WorkoutContainer/>
    </div>
  );
}


export default App;
