import Greeting from './Greeting'; // import the component
import Example from './Nestedcomponents/Example';
import './App.css'
import Apple from './Apple';
import Firstcomponent from './propscontainer/Firstcomponent';
import Secondcomponent from './propscontainer/Secondcomponent';
import Thirdcomponent from './propscontainer/Thirdcomponent';
import Fourthcomponent from './propscontainer/Fourthcomponent';

const user ={
  name: "Gayatri",
  age: 20,
  occupation: "Software Engineer",
  hobbies: ["reading"," ", "coding"," ", "drawing"]
}
function App() {
  return (
    <div className="container">
      <Greeting />  
      <Example />
      <h1>This is sample code with styles </h1>
      <Apple />
      <img src = "https://th.bing.com/th/id/OIP.7cRYFyLoDEDh4sRtM73vvwHaDg?cb=iwp2&rs=1&pid=ImgDetMain" />
      <Firstcomponent name ={user.hobbies}/>
      <Secondcomponent name = "Geetha"/>
      <Thirdcomponent name = "Gayatri"/>
      <Fourthcomponent name = "Gaya3"/>
    </div>
  );
}

export default App;
