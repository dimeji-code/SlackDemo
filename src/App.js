import logo from './logo.svg';
import './App.css';
import Split from 'react-split'
import React from 'react';

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Help from "./components/Help"
import Modal from "./components/Modal"
import MainPage from "./routes/MainPage"
import Landing from "./routes/Landing"
import Signin from "./routes/Signin"
import {useSelector, useDispatch } from 'react-redux';
import {selectHelpOpen,selectProfileOpen,selectLoginState,selectModalState } from "./features/appSlice"

function App() {
  const profile = useSelector(selectProfileOpen)
  const help = useSelector(selectHelpOpen)
  const loginState = useSelector(selectLoginState)
  const modalState = useSelector(selectModalState)
  const dispatch = useDispatch()

console.log("selectProfileOpen is:", profile);
return (
    <Page>
      { !loginState &&
       <BrowserRouter> 
                 <Routes>
                  <Route path="/" element={<Landing/>}  />
                  {/* <Route path="/auth" element={<Signin/>}  /> */}

                 </Routes>

      </BrowserRouter>
      } 
      { loginState && 
      <BrowserRouter>
      {modalState && <Modal/> }

       <Header />

        <AppBody>
          <Split  style={{flex:1,flexDirection: "row", display:"flex", width:"100vw" }} sizes={[100,0]}
            minSize={0}
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
                <Route path="/addChannel" element={<MainPage current="addChannel" />}  /> {/* change this name soon */}
              </Routes>
            </MiddleGrid>
            <ProfileGrid style={{
              minWidth : (profile | help )?'20vw':'0vw',
              maxWidth : (profile | help )?'60vw':'0vw',  
            }}>
              {profile && !help &&
                // <Profile user="First M. Last" email="first.last@gmail.com"/>
                <Profile />
              }
              {!profile && help &&
                <Help /> 
              }
            </ProfileGrid>
          </Split>
        </AppBody>

      </BrowserRouter>
      }

    </Page>
  );
}

export default App;
const Page = styled.div`
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
`
const MiddleGrid = styled.div`
  height:100%;
  min-width:40vw;
  max-width: 100vw;
  background-color:#F8F8F8;
`
const ProfileGrid = styled.div`
  height:100%;
  background-color:white;
  border: 1px solid var(--slack-border-white);
`
