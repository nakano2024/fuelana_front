import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider, Flex} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IsMobile } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContent } from './component/MainContent';
import { SidebarHeaderWrapper } from './component/SidebarHeaderWrapper';
import { AuthCountent } from './component/AuthContent';
import { UnauthContent } from './component/UnauthContent';
import { AuthenticatedAdminUser } from './dummy';


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

  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  return (
    <ChakraProvider>
      <IsMobile.Provider value = {isMobile}>
        <BrowserRouter>
          <div
            className="App" 
            fontSize={isMobile? "90%" : "100%"}
          >
            <AuthCountent />
          </div>
        </BrowserRouter>
      </IsMobile.Provider>
    </ChakraProvider>
  );
}

export default App;
