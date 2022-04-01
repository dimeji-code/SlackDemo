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
const SideBar = (props) =>{
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
                    <SideBarEdit>
                        <CreateIcon />
                    </SideBarEdit>
                </SideBarHeader>
                <SideBarOptions>
                    <SideBarItem>
                        <MessageIcon/>
                        <Typography>Threads</Typography>
                    </SideBarItem>
                    <SideBarItem>
                        <AlternateEmailIcon/>
                        <Typography>Mentions & Reactions</Typography>
                    </SideBarItem>
                    <SideBarItem>
                        <ForumIcon/>
                        <Typography>Slack Connect</Typography>
                    </SideBarItem>
                    <SideBarItem>
                        <MoreVertIcon/>
                        <Typography>More</Typography>
                    </SideBarItem>
                </SideBarOptions>
                <DropDown title="Channels" add="Add channels"/>
                <DropDown title="Direct messages" add="Add teammates"/>
                <DropDown title="Apps" add="Add apps"/>
               
            </SideBarContainer>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    overflow-y: scroll;
    margin-top:70px;
    max-width: 385px;
    min-width:240px;
    /* flex:0.3; */
    border:0.2;
    border-top: 1px solid #49274b;
    /* flex-direction:"row"; */
    justify-content:space-between;
    background-color: var(--slack-color);
    height: 100vh;
` 
const SideBarHeader= styled.div`
    display: flex;
    justify-content:space-between;
    color: white;
    height:40px;
    padding: 15px;
    border-bottom: 1px solid #49274b;
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
