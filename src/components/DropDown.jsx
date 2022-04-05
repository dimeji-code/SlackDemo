import React,{useState} from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import { Typography  } from "@mui/material";
import FiberManualRecordIcon  from "@mui/icons-material/FiberManualRecord";
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';

var listItems = ["access", "general", "random"]

const DropDown = (props) =>{
    const [drop, setDrop] = useState(false)

  return (
    <div>
        <DropDownOption>
            <DropDownItem>
                <button onClick={()=>{setDrop(!drop)}}>
                    { drop && <ArrowDropDownIcon/>}
                    {!drop && <ArrowRightIcon/>}
                    
                </button>
                <DropDownTitleGrid>
                    <div>
                        <Typography>{props.title}</Typography>
                    </div>
                    <MoreVertIcon className="hide"/>
                    <AddIcon className="hide"/>

                </DropDownTitleGrid>
            </DropDownItem>
            { drop &&
                listItems.map(item => (
                <SubItem>
                    <TagOutlinedIcon/>
                    <Typography>{item}</Typography>
                </SubItem>
                ))
            }
            <SubItem>
                <AddIcon/>
                <Typography>{props.add}</Typography>
            </SubItem>

        </DropDownOption>
    </div>
  )
}

export default DropDown

const DropDownOption = styled.div`
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;


`
const DropDownTitleGrid = styled.div` 
    display: flex; 
    flex:1;
    justify-content:space-between;
    flex-direction: row;
    > div{
        flex:0.7;
        min-width:150px;
        }
    .hide{
        visibility: hidden;
        }

    > .MuiSvgIcon-root{
    flex:0.13;
    padding:2px;
    border-radius: 4px;
        :hover + .hide {
            background-color: #cfc3cf30;
            visibility: visible;

        }
 } 
    
`

const DropDownItem = styled.div`
    color:#CFC3CF;
    display: flex;
    > button{
        outline: none;
        background-color: transparent;
        border: none;
        display: flex;
    }
    > button .MuiSvgIcon-root{
        font-size: 22px;
        color: #CFC3CF;
        margin-top: 0;
        padding-right: 2px;
        padding-bottom: 2px;
        padding-top: 2px;
        :hover{
            background-color: #cfc3cf30;
            border-radius: 5px;
    }
 } 
 :hover{
     opacity:0.9;
     cursor:pointer;
 }
`
const SubItem = styled.div`
    padding:3px;
    margin-left: 15px;
    color:#CFC3CF;
    display: flex;
    min-width:150px;

    > .MuiSvgIcon-root{
        font-size: 20px;
        color: #CFC3CF;
        margin-top: 1px;
        margin-right: 12px;
        padding:2px;
        background-color: #cfc3cf30;
        border-radius: 5px;

        :hover{
            background-color: #cfc3cf30;

        }
    } 
    :hover{
        opacity:0.75;
        cursor:pointer;
    }
 `