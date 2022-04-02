import logo from './logo.svg';
import './App.css';
import Split from 'react-split'

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Profile from "./components/Profile"
import Help from "./components/Help"
import Threads from "./routes/Threads"
import NewMessage from "./routes/NewMessage"
function App() {
  return (
    <Page>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Split  style={{flex:1,flexDirection: "row", display:"flex", width:"100vw" }} sizes={[70,30]}
            minSize={'50vh'}
            expandToMin={false}
            gutterSize={1}
            gutterAlign="center"
            // snapOffset={10}
            dragInterval={4}
            direction="horizontal"
            cursor="col-resize">
            <Split style={{flexDirection: "row", display:"flex", minWidth:"30vw"}}  
            minSize={'60vh'}
            expandToMin={false}
            gutterSize={1}
            gutterAlign="center"
            dragInterval={4}
            direction="horizontal"
            cursor="col-resize">
              <Left>
                <SideBar company="RandomCompany Inc." user="Dimeji S." />
              </Left>
              <MiddleGrid>
                <Routes>
                  <Route path="/" element={<Threads/>}  />
                  {/* <Route path="/" element={<NewMessage/>}  /> */}
                </Routes>
              </MiddleGrid>
            </Split>
            <ProfileGrid >
              <Profile user="Dimeji Situ" email="dimeji.situ@gmail.com"/>
            </ProfileGrid>
          </Split>
        </AppBody>

      </BrowserRouter>

    </Page>
  );
}

export default App;
const Page= styled.div`
  display: flex;
  /* overflow-y: scroll; */

`
const AppBody = styled.div`
/* position: relative; */
  border: 2px solid black;
  height:100vh;
  width:100vw;
  flex:1;
  display: flex;
  align-items: space-evenly;
  /* flex-direction: row; */
`
const Left = styled.div`
/* display: flex ;
flex:1; */
  /* flex:0.3; */
`
const MiddleGrid = styled.div`
/* position: relative; */
  /* align-items: flex-end; */
  height:100%;
  min-width:40vw;
  max-width: 90vw;
  /* flex:0.7; */
  background-color:#F8F8F8;
  /* flex-direction: row; */


`
const ProfileGrid = styled.div`

  height:100%;
  min-width:30vw;
  max-width:60vw;
  /* flex:0.3; */
  /* justify-content: flex-end; */
  background-color:white;
  border: 1px solid var(--slack-border-white);
`
