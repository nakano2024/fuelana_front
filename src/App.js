import logo from './logo.svg';
import './App.css';
import { TotalDistance } from './component/TotalDistance';
import { Box, ChakraProvider, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IsMobile } from './context';
import { FixedSidebar } from './component/FixedSidebar';
import { CollapsibleSidebar } from './component/CollapsibleSidebar';
import { MobileHeader } from './component/MobileHeader';
import { BrowserRouter } from 'react-router-dom';


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
          <Flex className="App" fontSize={isMobile? "80%" : "100%"}>

            {isMobile ?
              <div>
                <MobileHeader/> 
              </div>
              : 
              <div>
                <FixedSidebar/>
              </div>
            }

            <Flex 
              mt = {isMobile ? "45px" : "0px"} 
              flex = {1}
              justifyContent = {"center"}
              p = {"10px"}
            >
              {/*ここにメインコンテンツを置いていく*/}
                <Box>
                  <TotalDistance />
                </Box>
            </Flex>

          </Flex>
        </BrowserRouter>
      </IsMobile.Provider>
    </ChakraProvider>
  );
}

export default App;
