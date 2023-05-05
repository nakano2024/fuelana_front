import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Flex} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IsMobile } from './context';
import { BrowserRouter } from 'react-router-dom';
import { MainContent } from './component/MainContent';
import { SidebarHeaderWrapper } from './component/SidebarHeaderWrapper';


function App() {

  const [isMobile, setIsMobile] = useState(false);

  const changeIsMoble = ()=>{
    //モバイルサイズであることを示すフラグ
    setIsMobile(window.innerWidth <= 660);
  }
  
  useEffect(()=>{
    changeIsMoble();
    window.addEventListener("resize" , changeIsMoble);
  }, []);

  return (
    <ChakraProvider>
      <IsMobile.Provider value = {isMobile}>
        <BrowserRouter>
          <Flex 
            className="App" 
            fontSize={isMobile? "90%" : "100%"}
          >
            <SidebarHeaderWrapper />
            <MainContent />
          </Flex>
        </BrowserRouter>
      </IsMobile.Provider>
    </ChakraProvider>
  );
}

export default App;
