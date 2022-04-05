import React from "react"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import { Typography  } from "@mui/material";
import FiberManualRecordIcon  from "@mui/icons-material/FiberManualRecord";
import CreateIcon  from "@mui/icons-material/Create";
import MessageIcon  from "@mui/icons-material/Message";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import DropDown from "./DropDown"

import {
    BrowserRouter ,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const SideBar = (props) =>{

    var currentPage = props.current
    return(

            <SideBarContainer>
                <SideBarHeader>
                    <SideBarInfo>
                        <h3>{props.company}</h3>
                        <h4>
                            <FiberManualRecordIcon />
                            {props.user}
                        </h4>
                    </SideBarInfo>
                    <Link to={"/newmessage"}>
                        <SideBarEdit>
                            <CreateIcon />
                        </SideBarEdit>
                    </Link>
                </SideBarHeader>
                <SideBarOptions>
                    <Link key={0} style={{ textDecoration: 'none',color:"black"}}  to={'/'}>
                        <SideBarItem style={{ backgroundColor : (currentPage == "threads" ? "#2b274bac":"transparent")}}>
                            <MessageIcon/>
                            <Typography>Threads</Typography>
                        </SideBarItem>
                    </Link>
                    <Link key={1} style={{ textDecoration: 'none',color:"black"}} to={'/mentions'}>
                        <SideBarItem style={{ backgroundColor : (currentPage == "mentions" ? "#2b274bac":"transparent")}}>
                            <AlternateEmailIcon/>
                            <Typography>Mentions & Reactions</Typography>
                        </SideBarItem>
                    </Link>
                    <Link key={2} style={{ textDecoration: 'none',color:"black"}} to={'/connect'}>
                    <SideBarItem style={{ backgroundColor : (currentPage == "connect" ? "#2b274bac":"transparent")}}>
                        <ForumIcon/>
                        <Typography>Slack Connect</Typography>
                    </SideBarItem>
                    </Link>
                    <SideBarItem>
                        <MoreVertIcon/>
                        <Typography>More</Typography>
                    </SideBarItem>
                    <DropDown title="Channels" add="Add channels"/>
                    <DropDown title="Direct messages" add="Add teammates"/>
                    <DropDown title="Apps" add="Add apps"/>
                </SideBarOptions>
                {/* <DropDown title="Channels" add="Add channels"/>
                <DropDown title="Direct messages" add="Add teammates"/>
                <DropDown title="Apps" add="Add apps"/> */}
               
            </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    overflow-y: scroll;
    margin-top:59px;
    max-width: 385px;
    /* max-width: 40vw; */
    /* min-width:240px; */
    border:0.2;
    border-top: 1px solid #49274b;
    border-top: 1px solid #2b274b78;
    justify-content:space-between;
    background-color: var(--slack-color);
    /* height: 100vh; */
` 
const SideBarHeader= styled.div`
    display: flex;
    position: sticky;
    justify-content:space-between;
    color: white;
    min-height:30px;
    padding: 8px;
    border-bottom: 1px solid #49274b;
    min-width:250px;

` 
const SideBarInfo= styled.div`
color:white;
 > h3{
     font-weight: 900;
     font-size: 15px;
 }
 > h4{
    display:flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
 } 
 > h4 > .MuiSvgIcon-root{
    font-size: 14px;
    color: green;
    margin-top: 1px;
    margin-right: 2px;

 } 
`
const SideBarEdit= styled.div`
    >.MuiSvgIcon-root{
        color: var(--slack-color);
        background-color: white;
        padding:8px;
        font-size: 18px;
        border-radius: 998px;
        :hover{
            opacity:0.8;
            cursor:pointer;
        }
    }
`
const SideBarOptions = styled.div`
    padding: 15px;
    overflow-y: scroll;
    min-width:255px;
    display: flex;
    flex-direction: column;
    height:85%;
    


`
const SideBarItem = styled.div`
    padding:3px;
    color:#CFC3CF;
    display: flex;
    > .MuiSvgIcon-root{
    font-size: 20px;
    color: #CFC3CF;
    margin-top: 1px;
    margin-right: 12px;
    padding:2px;
 } 
 :hover{
     opacity:0.9;
     background-color:#49274b;
     cursor:pointer;
 }
`
