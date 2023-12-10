import './App.css';
import WorkoutContainer from './components/Container';

function App() {
  return (
    <div className="App">
      <img src="./elf-logo.png" alt="the logo for this application" className="App-logo"/>
      <h1>Welcome to WorkoutTracker!</h1>
      <h1>To do:</h1>
      <ul>
        <li>Fix datetime in API posting</li>
        <li>Actually authenticate user and make sure exercises are valid</li>
      </ul>
      <WorkoutContainer/>
    </div>
  );
}


export default App;
