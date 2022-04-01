import React,{useState, useEffect} from 'react'
import styled from "styled-components"
import {Typography,Button, Avatar,} from '@mui/material'
import CloseIcon  from "@mui/icons-material/Close";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Profile = (props) => {
    const [time, setTime] = useState(`loading..`)
    var date 
    var minutes 
    var hour 
    var second 

    var unit = "AM"

    setInterval(() => {
        date = new Date()
        minutes = date.getMinutes();
        hour = date.getHours();
        second = date.getSeconds();
        console.log("date:", second);
        if (hour>12 && hour != 0){
           hour-=12
           unit ="PM"
        } 

        setTime(hour.toString()+":"+minutes.
        toLocaleString('en-US', {minimumIntegerDigits: 2})+":"+second.
        toLocaleString('en-US', {minimumIntegerDigits: 2})+" "+unit)
        },1000)

  return (
    <ProfileContainer>
        <ProfileHeader>
        
            <h2>Profile</h2>
            <CloseIcon/>
        </ProfileHeader>
        <ProfileBody>
            <ProfilePicture>
                <div>
                    <img src="./user.png" />
                </div>
            </ProfilePicture>
            <h3>{props.user}</h3>
            <Button variant="text">Add a title</Button>
            <ProfileButtons>
                <ButtonContainer>
                <SentimentSatisfiedOutlinedIcon/>
                <h4>Set Status</h4>
                </ButtonContainer>
                <ButtonContainer>
                <EditOutlinedIcon/>
                <h4>Edit Profile</h4>

                </ButtonContainer>
                <ButtonContainer>
                <MoreHorizOutlinedIcon />
                <h4>More</h4>

                </ButtonContainer>
            </ProfileButtons>
 

        </ProfileBody>
        <div>
                <h5>Display Name</h5>
                <h6>{props.user}</h6>
                <h5>Local Time</h5>
                {/* <h6>{hour}:{minutes}:{second}{unit}</h6> */}
                <h6>{time}</h6>
                <h5>Email Address</h5>
                <h6>
                    <button>{props.email}</button>
                </h6>

        </div>
    </ProfileContainer>
  )
}

export default Profile
const ProfileContainer = styled.div`
border-top: 1px solid #49274b;
max-width: 70vw;
min-width: 20vw;
display: flex;
flex-direction:column;
height: 100%;
    >div{
        padding-left: 20px;
        padding-top:8px;
    }
    >div h5{
        font-size: 13px;
        font-weight: 500;
        color: grey;;
    }
    >div h6 {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        margin-top: 5px;
        >button{
            border: none;
            background-color:transparent;
            color: #1b1ba8;
            margin-left: -5px;
        }
    }
`
const ProfileHeader = styled.div`
    margin-top:70px;
    height: 40px;
    padding:20px;
    
    border-bottom: 1px solid var(--slack-border-white);
    display:flex;
    align-items:center;
    justify-content: space-between;
    /* background-color:green; */
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
const ProfileBody= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:20px;
    padding:10px;
    >h3{
        font-weight: 600;
        font-size: 18px;
    }

   
> .MuiSvgIcon-root{

        :hover{
            cursor:pointer;
            background-color: var(--slack-border-white);
            border-radius: 5px;
        }
    }
`
const ProfilePicture = styled.div`
        display:flex;

    > div{
        min-width:50px;
        min-height:80px;
        display:flex;
        /* object-fit: contain; */
        border-radius: 10px;
        overflow: hidden;

    }
`
const ProfileButtons =styled.div`
    display: flex;
    justify-content:space-evenly;
    > div{
        margin: 10px;
        text-align: center;
    }
    > div h4{
        color: grey;
        font-weight: 400;
        font-size: 14px;

    }
> div .MuiSvgIcon-root{
        color: black;
        background-color: #e4dede84;
        padding:8px;
        font-size: 24px;
        border-radius: 998px;
        :hover{
            opacity:0.8;
            cursor:pointer;
        }
    }
`
const ButtonContainer = styled.div``