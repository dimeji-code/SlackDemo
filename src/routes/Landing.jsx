
import React,{useState,useEffect} from 'react';
import styled from "styled-components"

import { useDispatch } from 'react-redux';
import {login, setCurrentUser } from "../features/appSlice"
import {Link} from "react-router-dom";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase"
import {getDatabase, ref, set} from "firebase/database"
import Modal from "../components/Modal"
function Landing() {

    const [switchMode, setSwitchMode] = useState(false);
    ////////////////////////////////////////////////////////////////////////
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    
    const createUser =  () =>{

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        user.displayName = name;
        console.log("USER IS ",user)
        // navigate("/", { replace: true })
        dispatch(setCurrentUser({currentUser: user}))
        const db = getDatabase();

        set(ref(db, 'users/' + user.uid), {
          name: name,
          email: email,
          // profile_picture : imageUrl
        });

      }).then(()=>{ 
          dispatch(login({ loggedIn: true }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("ERROR IS ",error.message)
      });

    }
    const logIn = () =>{

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("USER IS ",user.email)
        dispatch(setCurrentUser({currentUser: user}))
        // awaitModal()

        // navigate("/", { replace: true })
      }).then(()=>{ 
        console.log("aii");
          dispatch(login({ loggedIn: true }));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
    //////////////////////////////////////
    // const awaitModal = () =>{
    //   setShowModal(true)

    // }
return (
  <div>
  {!switchMode && 
    <Page>
        <LoginBody style={{backgroundColor: 'var(--slack-color)'}}>
          <Left>
            <ImgContainer>
              <img src="./slackLogo.png"/>
            </ImgContainer>
            <h3>Slack-demo brings the team together wherever you are</h3>
            <Link to="/" style={{ textDecoration: "none"}}>
              <Button onClick={()=> setSwitchMode(true)}>
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
  }
  {switchMode && 
      <Page>
        {/* { showModal &&
        <Modal/>
        } */}
      <Body style={{backgroundColor: 'var(--slack-color)'}}>
          <ImgContainer3>
            <img src="./slackLogo.png"/>
          </ImgContainer3>
          {true &&
          <EnterInfo>
              <h3>Signin / Signup</h3>
              <input required placeholder="Email" onChange={(text)=>setEmail(text.target.value)} value={email}  /><br/>
              <input  type="password" required placeholder="Password" onChange={(text)=>setPassword(text.target.value)} value={password} /><br/>
              <input type="text"  placeholder="(Name) Signup Only" onChange={(text)=>setName(text.target.value)} value={name} /><br/>
              <p>{email}</p>
              <p>{password}</p>
                  <SigninButton 
                  onClick={()=>{
                    logIn();
                  }}>Sign in to Slack-demo</SigninButton>
                  <SignupButton 
                  onClick={()=>{
                    if (name!=""){
                    createUser();
                    }
                  }}>Create  Account</SignupButton>
          </EnterInfo>
          } 
        </Body>
      </Page>
    }

  </div>
  );
}

export default Landing;
const Page= styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
  /* overflow-y: scroll; */
`
const Page2 = styled.div`
  display: flex;
  height:100vh;
  align-items: center;

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
///////////////////////////////////////////
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

const ImgContainer3 = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-evenly;

  >img{
    object-fit: contain;
  }
`

