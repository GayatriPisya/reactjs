import logo from './logo.svg';
import './App.css';

function App() {
  const user = "Gayatri";
  const age = 21;

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>You are {age} years old.</p>
      <p>5 + 3 = {5 + 3}</p>
    </div>
  );
}



export default App;
