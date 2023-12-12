import './App.css';
import WorkoutContainer from './components/Container';

function App() {
  return (
    <div className="App">
      <img src="./elf-logo.png" alt="the logo for this application" className="App-logo"/>
      <h1>Welcome to WorkoutTracker!</h1>
      <WorkoutContainer/>
    </div>
  );
}


export default App;
