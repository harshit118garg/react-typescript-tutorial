import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      <Greet name="Harshit" num={15} />  {/* passing props in a component */}
    </div>
  );
}

export default App;
