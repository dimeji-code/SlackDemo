import React, {useState} from 'react'
import styled from 'styled-components'
import SideBar from "../components/SideBar"
import Split from 'react-split'
import Threads from "./Threads" //move to components
import Mentions from "./Mentions" //move to components
import Connect from "./Connect" //move to components
import NewMessage from "./NewMessage" //move to components
import AddChannel from "./AddChannel" //move to components
import {selectCurrentUser } from "../features/appSlice"
import { useSelector } from 'react-redux';

const MainPage = (props) => {
    const userState = useSelector(selectCurrentUser)
    console.log("User state is:", userState)

    return (
    //  <div>
    //      <Header/>
    //     <AppBody>
    <ThreadContainer >
        <Split style={{flex:1,flexDirection: "row", display:"flex", width:"100vw" }} sizes={[30,60]}
            minSize={0}
            expandToMin={false}
            gutterSize={2}
            gutterAlign="center"
            dragInterval={4}
            direction="horizontal"
            cursor="col-resize">
        <SideBar company="Company Inc." user={userState.displayName} current={props.current} />
        <ContentBody>
        {props.current === "threads" &&  <Threads/>}
        {props.current === "mentions" &&  <Mentions/>}
        {props.current === "connect" &&  <Connect/>}
        {props.current === "newmessage" &&  <NewMessage/>}
        {props.current === "addChannel" &&  <AddChannel/>}
           
        </ContentBody>
        </Split>
    </ThreadContainer>
    // </AppBody>
    // </div>
  )
}

export default MainPage
const AppBody = styled.div`
  border: 2px solid black;
  height:100vh;
  width:100vw;
  flex:1;
  display: flex;
  align-items: space-evenly;
`
const ThreadContainer = styled.div`
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: row;
`

const ContentBody = styled.div`
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
    margin-top: 59px;
    /* min-height:30px; */
`

const ThreadHeader= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 59px;
    min-height:30px;
    padding:8px;
    border-bottom: 1px solid var(--slack-border-white);

  box-shadow: 0 3.8px 6.2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.3);

  background-color: rgba(238, 237, 228, 0.288);
  > h2{
        font-weight: 700;
        font-size:20px;
    }

`
const EmptyDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    border-bottom: 1px solid var(--slack-border-white);

    > div{
        color:#921b1b;
    }
    > h5{
        font-weight:300;
        padding:5px;
        text-align: center;
    }
    > button{
        outline:none;
        border:none;
        background-color: transparent;
        color: #1b1ba8;
        padding:2px;
    }

`
