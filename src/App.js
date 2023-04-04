import logo from './logo.svg';
import './App.css';
import { Distance } from './component/Distance';
import { GpsPosition } from './component/GpsPosition';
import { TotalDistance } from './component/TotalDistance';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <TotalDistance/>
      </div>
    </ChakraProvider>
  );
}

export default App;
