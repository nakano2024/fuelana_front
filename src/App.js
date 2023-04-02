import logo from './logo.svg';
import './App.css';
import { Distance } from './component/Distance';
import { GpsPosition } from './component/GpsPosition';
import { TotalDistance } from './component/TotalDistance';

function App() {
  return (
    <div className="App">
      <TotalDistance/>
    </div>
  );
}

export default App;
