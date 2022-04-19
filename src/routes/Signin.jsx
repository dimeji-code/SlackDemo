import React ,{useState, useEffect} from 'react';
import styled from "styled-components"

import { useSelector, useDispatch } from 'react-redux';
import {selectLoginState,login } from "../features/appSlice"
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {getDatabase, ref, set} from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase"

function Signin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginState = useSelector(selectLoginState)
    const dispatch = useDispatch()

    const createUser =  () =>{

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("USER IS ",user)
        const db = getDatabase();
        
        set(ref(db, 'users/' + user.uid), {
          // username: name,
          email: email,
          // profile_picture : imageUrl
        });
        dispatch(login({ loggedIn: true }));
        // navigate("/", { replace: true })


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR IS ",error.message)
      });

    }
    const login = () =>{

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        dispatch(login({ loggedIn: true }));
        // navigate("/", { replace: true })
        // dispatch(login({ loggedIn: true }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }



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
                    <SigninButton 
                    onClick={()=>{
                      login();
                    }}>Sign in to Slack-demo</SigninButton>
                    <SignupButton 
                    onClick={()=>{
                      createUser();
                    }}>Create  Account</SignupButton>
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



