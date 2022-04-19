import React,{useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom";

import styled from "styled-components"
import { Typography  } from "@mui/material";
import FiberManualRecordIcon  from "@mui/icons-material/FiberManualRecord";
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddIcon from '@mui/icons-material/Add';
import {getDatabase, ref, set, onValue,push} from "firebase/database"

var listItems = []

const DropDown = (props) =>{
    const [drop, setDrop] = useState(false)
    const [textInput, setTextInput] = useState("")
    const navigate = useNavigate();
    
    const getChannels = () =>{ //use this to get channels
        const db = getDatabase()
        const channelsList = ref(db, 'channels/');
        // var list = []
        onValue(channelsList, (snapshot)=>{
            const data = snapshot.val();

            listItems = [];
            for (var i in data){
                var newObj = {...data[i],...{channelId : i}}

                // list.push(data[i])
                listItems.push(newObj)
                // console.log("data[i] is",data[i]);
                // console.log("data is",i);
                // console.log("list items",listItems);
                // console.log("new obj items",newObj);

            }
        })
    }
    useEffect(() =>{
        getChannels()
    },[])
    const handleKey = (e) => {

        if (e.key === 'Enter' && textInput != "") {
        //   console.log('do validate')
          if(props.add == "Add channels"){
            const db = getDatabase()
            const channelRef = ref(db, 'channels')
            const newChannelRef = push(channelRef)
            set(newChannelRef, {
                name:textInput,
             });
          }
          getChannels()
          setTextInput("")

        }
      }
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

                </DropDownTitleGrid>s
            </DropDownItem>
            { drop && (props.add == "Add channels")&&
                listItems.map(item => (
                <SubItem onClick={()=> navigate('/addChannel', { state: { selectedChan : item } })}>
                    <TagOutlinedIcon/>
                    <Typography>{item.name}</Typography>
                </SubItem>
                ))
            }
            <SubItem>
                <AddIcon/>
                <input onKeyDown={handleKey} placeholder={props.add} onChange={(val)=>setTextInput(val.target.value)} value={textInput}/>
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
 >input{
     background-color: transparent;
     border:none;
     font-weight: 700;
     font-size: 14px;
     color:white;
     outline: none;

     :hover{
     background-color: #9e9b9bc5;
     border:none;
     outline: none;
     }
 }
 >::placeholder{
     color: white;
 }
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