import Greeting from './Greeting'; // import the component
import Example from './Nestedcomponents/Example';
import './App.css'
function App() {
  return (
    <div className='App'>
      <Greeting />  
      <Example />
      
    </div>
  );
}

export default App;
