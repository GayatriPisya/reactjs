import Greeting from './Greeting'; // import the component
import Example from './Nestedcomponents/Example';
import './App.css'
function App() {
  return (
    <div className='App'>
      <Greeting />  
      <Example />
      <h1>This is sample css file</h1>
    </div>
  );
}

export default App;
