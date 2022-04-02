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
            // dragInterval={4}
            direction="horizontal"
            cursor="col-resize">

              <MiddleGrid>
                <Routes>
                  <Route path="/" element={<Threads/>}  />
                  {/* <Route path="/" element={<NewMessage/>}  /> */}
                </Routes>
              </MiddleGrid>
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
  
  overflow-y: scroll;

`
const AppBody = styled.div`
  border: 2px solid black;
  height:100vh;
  width:100vw;
  flex:1;
  display: flex;
  align-items: space-evenly;
  /* flex-direction: row; */
`

const MiddleGrid = styled.div`

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
  background-color:white;
  border: 1px solid var(--slack-border-white);
`
