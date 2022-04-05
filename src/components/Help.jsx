import React from 'react'
import styled from 'styled-components'
import CloseIcon  from "@mui/icons-material/Close";
import SearchIcon  from "@mui/icons-material/Search";
import {useDispatch} from "react-redux"
import {openHelp} from "../features/appSlice"

const Help = (props) => {
    const dispatch = useDispatch();

  return (
    <HelpContainer>
        <HelpHeader>
            <h2>Help</h2>
            <CloseIcon onClick={()=>{
                dispatch(openHelp({helpOpen : false}))   
            }}/>
        </HelpHeader>
        <HelpBody>
            <h6>Find answers quickly</h6>

            <Search>
                <div>
                    <SearchIcon />
                </div>
                <input placeholder="Search Administration" />
            </Search>
        </HelpBody>
    </HelpContainer>
  )
}

export default Help

const HelpContainer = styled.div`
    border-top: 1px solid #49274b;
max-width: 60vw;
min-width: 20vw;
height: 100%;
`

const HelpHeader = styled.div`
 margin-top:59px;
 min-height:30px;
    border-bottom: 1px solid var(--slack-border-white);
    display:flex;
    align-items:center;
    padding:12px;
    justify-content: space-between;
    > h2{
        font-weight: 700;
        font-size:20px;
    }
    > .MuiSvgIcon-root{
        :hover{
            cursor:pointer;
            background-color: var(--slack-border-white);
            border-radius: 5px;
        }
    }
`

const HelpBody = styled.div`
    padding:15px;
`

const Search = styled.div`
    display: flex;
    flex-direction: row;
    /* flex: 0.4; */
    opacity: 1;
    padding:4px;
    text-align: center;
    border-radius: 6px;
    background-color: #e4e0e4b7;
    font-size:32px;
    border: 1px solid gray;
    color:grey;
    height: 40px;
    > input{
        height: 40px;
        background-color: #e4e0e42f;
        border: 0px;
        min-width: 70%;
        /* text-align: center; */
        /* justify-content: center; */
        outline: 0;
        color:white;
    }`