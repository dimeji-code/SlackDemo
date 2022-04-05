import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux"
import {openProfile,openHelp,selectHelpOpen,selectProfileOpen} from "../features/appSlice"

const Header = (props) =>{
    const dispatch = useDispatch();
    const profile = useSelector(selectProfileOpen)
    const help = useSelector(selectHelpOpen)

    return(
        <HeaderContainer>
            <HeaderLeft>
                <Time>
                    <AccessTimeIcon />
                </Time>
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Administration" />
            </HeaderSearch>

            <HeaderRight>
                <Help  onClick={() =>{
                     dispatch(openProfile({
                        profileOpen : false
                     }));
                     dispatch(openHelp({helpOpen : !help}))

                     }}>
                 <HelpOutlineIcon/>
                </Help>
                <HeaderAvatar onClick={() =>{
                     dispatch(openHelp({helpOpen : false}))
                     dispatch(openProfile({
                        profileOpen : !profile
                     }));
                     console.log("profile open:", profile);
                     }}>
                    <img src="./user.png" />
                </HeaderAvatar>
            </HeaderRight>
          
        </HeaderContainer> 
       )
}

export default Header

const HeaderContainer = styled.div`
  color: white;
  /* background-color: #4a164a; */
  background-color: var(--slack-color);
  height: 50px;
  width: 100%;
  padding:5px 0;
  align-items: center;
  justify-content:space-between;
  display: flex;
  position: fixed;

`;

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.24;
    align-items: center;
    margin-left: 20px;
    justify-content:flex-end;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right:30px;
    }

`;
const Time = styled.div`
    display: flex;
    :hover{
        cursor:pointer;
        opacity:0.8;
        border-radius: 5px;
    }
`
const Help = styled.div`
    padding: 10px;
    :hover{
        cursor:pointer;
        opacity:0.8;
        border-radius: 5px;
    }
`
const HeaderAvatar = styled.div`
    cursor:pointer;
    width:42px;
    height:42px;
    border-radius: 5px;
    overflow: hidden;
    display: flex;

    :hover{
        opacity:0.8;
    }
    > img{
        object-fit: contain;
    }
`;
const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    padding:4px;
    text-align: center;
    border-radius: 6px;
    background-color: #421f44;
    border: 1px solid gray;
    padding:0 50px;
    color:grey;
    > input{
        background-color: #421f44;
        border: 0px;
        min-width: 30vw;
        text-align: center;
        outline: 0;
        color:white;
    }
    
`;
const HeaderRight = styled.div`
    /* padding:4px; */
    margin-right: 20px;
    display: flex;
    justify-content: flex-end;
    flex: 0.3;
    align-items: center;
     > .MuiSvgIcon-root{
         padding:5px
     }

`;