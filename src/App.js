import logo from './logo.svg';
import './App.css';
import BioData from './components/BioData';
import data from './data.js';

function App() {

  return (
    <div className ="App">
      {
        data.map(data => <BioData bioData ={data} />)
      }
      
    </div>
  );
}

// function add (a, b) {
//   return a + b;
// }

// add(10, 20);
// add(30, 100)

export default App;
