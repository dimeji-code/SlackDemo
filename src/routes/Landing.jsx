
import React from 'react';
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';
import {selectLoginState,login } from "../features/appSlice"
import {Link} from "react-router-dom";
function Landing() {
    const loginState = useSelector(selectLoginState)
    const dispatch = useDispatch()

return (
    <Page>
      
        <LoginBody style={{backgroundColor: 'var(--slack-color)'}}>
          <Left>
            <ImgContainer>
              <img src="./slackLogo.png"/>
            </ImgContainer>
            <h3>Slack-demo brings the team together wherever you are</h3>
            <Link to="/Signin" style={{ textDecoration: "none"}}>
              <Button>
                Sign in to Slack-demo
              </Button>
            </Link>
            <h6>We'll take you to your web browser to sign in and then bring you back here</h6>
            <h6> Is your team new to Slack? Create a new workspace.</h6>
          </Left>
          <Right>
          <ImgContainer2>
            <img src="./collab.png"/>
          </ImgContainer2>

          </Right>
        </LoginBody>
      
    </Page>
  );
}

export default Landing;
const Page= styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
  /* overflow-y: scroll; */
`

const LoginBody = styled.div`
  border: 2px solid black;
  height:100vh;
  width:100vw;
  flex:1;
  display: flex;  
`
const Right = styled.div`
    display: flex;
    flex: 0.35;
    justify-content: flex-end;
    align-items: center;
   
  `
const Left = styled.div`
  overflow-y: scroll;
  flex: 0.65;
  padding: 40px 45px;
  >h3{
    margin: 20px 0;
    padding: 20px ;
    color: white;
    font-weight: 700;
    font-size: 48px;
  }
  >h6{
    margin: 10px 0;
    color: #ccc;
    font-weight: 500;
    font-size: 18px;
  }
  > Link{
    background-color: #007a5a;
    width: 100px;
  >button{
   
  }
}`
const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 180px;
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
`

const ImgContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  >img{
    object-fit: contain;
  }
`
const ImgContainer2 = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: flex-end;
  >img{
    object-fit: contain;
  }
`


