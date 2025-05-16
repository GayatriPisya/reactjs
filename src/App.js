import Greeting from './Greeting'; // import the component
import Example from './Nestedcomponents/Example';
import './App.css'
import Apple from './Apple';

function App() {
  return (
    <div className="container">
      <Greeting />  
      <Example />
      <h1>This is sample code with styles </h1>
      <Apple />
    </div>
  );
}

export default App;
