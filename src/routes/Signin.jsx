import React ,{useState} from 'react';
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';
import {selectLoginState,login } from "../features/appSlice"
import {Link} from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginState = useSelector(selectLoginState)
    const dispatch = useDispatch()

return (
    <Page>
      
        <Body style={{backgroundColor: 'var(--slack-color)'}}>
            <ImgContainer>
              <img src="./slackLogo.png"/>
            </ImgContainer>
            {true &&
            <EnterInfo>
                <h3>Signin / Signup</h3>
                <input required placeholder="Email" onChange={(text)=>setEmail(text.target.value)} value={email}  /><br/>
                <input type="password" required placeholder="Password" onChange={(text)=>setPassword(text.target.value)} value={password} /><br/>
                <p>{email}</p>
                <p>{password}</p>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <SigninButton 
                    onClick={()=>{dispatch(login({loggedIn:true}));
                    console.log("Logged in ->",loginState)
                    }}>Sign in to Slack-demo</SigninButton></Link>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <SignupButton 
                    onClick={()=>{dispatch(login({loggedIn:true}));
                    console.log("Logged in ->",loginState)
                    }}>Create  Account</SignupButton></Link>
            </EnterInfo>
            } 
           

        </Body>
      
    </Page>
  );
}

export default Signin;
const Page= styled.div`
  display: flex;
  height:100vh;
  align-items: center;

`

const Body = styled.div`
    border: 2px solid black;
    height:100vh;
    width:100vw;
    align-items: center;
    display:flex;
    flex-direction: column;

`
const EnterInfo = styled.div`
    border: 1px solid #ccc;
    background-color: #ffffff;
    border-radius: 15px;
    padding:20px;
    text-align:center;
    min-width: 300px;

    >h3{
    margin: 20px 0;
    padding: 20px ;
    color: var(--slack-color);
    font-weight: 700;
    font-size: 48px;
  }

  >input{
      margin:5px;
      padding:10px;
      border: none;
      border-bottom:1px solid #6d5782;
      min-width:180px;
      outline:none;
      font-size: 16px;
      font-weight: 500;
  }
  >button{
    border:none;
    margin: 20px 20px;
    padding: 20px;
    background-color: #007a5a;
    border-radius: 12px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    :hover{
      cursor: pointer;
      background-color: #007a2f;
    }
  }
`
const SigninButton = styled.div`
 border:none;
    margin: 20px 20px;
    padding: 20px;
    background-color: #007a599f;
    border-radius: 12px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    :hover{
      cursor: pointer;
      background-color: #007a2f;
    }
`
const SignupButton = styled.div`
 border:none;
    margin: 20px 20px;
    padding: 20px;
    background-color: #49007a9c;
    border-radius: 12px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    :hover{
      cursor: pointer;
      background-color: #3b007a;
    }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-evenly;

  >img{
    object-fit: contain;
  }
`



