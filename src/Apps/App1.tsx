import { Greet } from "../components/Greet";
import Heading from "../components/Heading";
import Oscar from "../components/Oscar";
import Person from "../components/Person";
import PersonList from "../components/PersonList";
import Status from "../components/Status";

import { nameList } from "../components/PersonList.type";

function App1() {
  const PersonName = {
    fName: "Bruce",
    lName: "Wayne",
  };

  return (
    <div className="App">
      <h1 className="text-success">hello world!</h1>
      <hr />
      {/* passing props in a component */}
      <Greet name="Harshit" isLoggedIn={true} />
      <hr />
      <Person name={PersonName} />
      <hr />
      <PersonList list={nameList} />
      <hr />
      <Status status="Error" />
      <hr />
      {/* passing the text between opening and closing tags as PROPS */}
      {/* passing Component as PROPS */}
      <Oscar>
        <Heading>Oscar goes to Sam Raimi</Heading>
      </Oscar>
      <hr />
    </div>
  );
}

export default App1;

/*
  TIPS
========

1. always destructure the props 
2. it is better to create a separate file for the Prop-types, which can be exported and imported in the required component  
3. for similar types create a separate variable and use it when ever required.
*/
