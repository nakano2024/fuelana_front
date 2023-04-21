import logo from './logo.svg';
import './App.css';
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
