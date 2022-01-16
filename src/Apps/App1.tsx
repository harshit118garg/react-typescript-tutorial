import { Greet } from "../components/Greet";
import Heading from "../components/Heading";
import Oscar from "../components/Oscar";
import Person from "../components/Person";
import PersonList from "../components/PersonList";
import Status from "../components/Status";

function App1() {
  const PersonName = {
    fName: "Bruce",
    lName: "Wayne",
  };

  const nameList = [
    {
      fName: "Steve",
      lName: "Rogers",
      identity: "Captain America",
    },
    {
      fName: "Clint",
      lName: "Barton",
      identity: "Hawkeye",
    },
    {
      fName: "Tony",
      lName: "Stark",
      identity: "Iron Man",
    },
  ];

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
