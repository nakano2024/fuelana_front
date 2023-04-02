import logo from './logo.svg';
import './App.css';
import { Distance } from './component/Distance';
import { GpsPosition } from './component/GpsPosition';

function App() {
  return (
    <div className="App">
      <GpsPosition/>
    </div>
  );
}

export default App;
