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
import MainPage from "./routes/MainPage"
import NewMessage from "./routes/NewMessage"
import Mentions from "./routes/Mentions"
import { Provider, useSelector } from 'react-redux';
import store from './app/store'
import {selectHelpOpen,selectProfileOpen } from "./features/appSlice"

function App() {
  const prof = useSelector(selectProfileOpen)
  const hel = useSelector(selectHelpOpen)

console.log("selectProfileOpen is:", prof);
// console.log("selectProfileOpen is:", selectProfileOpen);
return (
    <Page>
      <BrowserRouter>
        <Header />
        <AppBody>
          <Split  style={{flex:1,flexDirection: "row", display:"flex", width:"100vw" }} sizes={[100,0]}
            minSize={'80vh'}
            expandToMin={false}
            gutterSize={2}
            gutterAlign="center"
            direction="horizontal"
            cursor="col-resize">

              <MiddleGrid style={{width: '100%',flex:1}}>
                <Routes>
                  <Route path="/" element={<MainPage current="threads" />}  />
                  <Route path="/newmessage" element={<MainPage current="newmessage" />}  />
                  <Route path="/mentions" element={<MainPage current="mentions" />}  />
                  <Route path="/connect" element={<MainPage current="connect" />}  />
                </Routes>
              </MiddleGrid>
                <ProfileGrid style={{
                  minWidth : (prof | hel )?'20vw':'0vw',
                  maxWidth : (prof | hel )?'60vw':'0vw',
                  
                  }}>
                {prof && !hel &&
                  <Profile user="First M. Last" email="first.last@gmail.com"/>
                }
                {!prof && hel &&
                  <Help /> 
                }
              {/* <Help /> */}
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
  flex-direction: column;
  height:100vh;

  /* overflow-y: scroll; */

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
  max-width: 100vw;
  /* flex:0.7; */
  background-color:#F8F8F8;
  /* flex-direction: row; */


`
const ProfileGrid = styled.div`
  /* visibility: hidden; */

  height:100%;
  /* min-width:0vw;
  max-width:60vw; */
  background-color:white;
  border: 1px solid var(--slack-border-white);
`
