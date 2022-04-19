import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {activateModal, selectCurrentUser} from "../features/appSlice"
import {useDispatch,useSelector} from "react-redux"
import {  updateProfile } from "firebase/auth";
import { getDatabase,push,child,ref } from "firebase/database";

import auth from "../firebase"
const Modal = (props)=> {
    const [name, setName] = useState("")
    const userState = useSelector(selectCurrentUser)

    const updateUser = () => {
        if (name!= ""){

            const db = getDatabase();
            const newPostKey = push(child(ref(db), 'users')).key;


            updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
            // Profile updated!
            dispatch(activateModal({modalOpen:false}))
            }).catch((error) => {
            // An error occurred
            // ...
            });

        }
}

    useEffect(() => {
        console.log("name is", name)
    },[name])

const dispatch = useDispatch()
  return (
    <ModalContainer>
        <Center>
            <Top>
            <h3>Edit your profile</h3>
            <form>
                <label>Full Name</label>
                <input placeholder="edit display name" value={name} onChange={(event) => setName(event.target.value)}></input> 
            </form>
            </Top>
            <BottomButtons>
                <Close>
                    Cancel
                </Close>
                <Save onClick={()=>{updateUser()}}>
                    Save Changes
                </Save>
            </BottomButtons>
        </Center>
    </ModalContainer>
  )
}

export default Modal

const ModalContainer = styled.div`
    position: fixed;
    background-color:#3f363f39;
    display:flex;
    align-items: center;
    justify-content: center;
    /* width:100vh;
    height:100vh; */
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    padding:15px;
    width: 25%;
    height:40%;
    background-color:#fff;
    box-shadow: 0 3.8px 6.2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    border: 1px solid var(--slack-border-white);
   
`
const Top = styled.div`
    flex:0.8;
 >h3{
        margin-top:10px;
        margin-bottom:20px;
        font-weight: 600;
        font-size: 22px;
    }
    > form{
        display: flex;
        align-items: center;
        >label{
            margin-right:10px;
            flex:0.3;
        }
        >input{
            border:1px solid #6f6d6d;
            border-radius: 4px;
            min-height: 28px;
            flex:0.7;

        }
    }
`
const BottomButtons = styled.div`
    flex:0.2;
    bottom:0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
`
const Close = styled.div`
    flex:0.2;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:10px;
    margin:4px;
    background-color:#f0f0f082;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-weight: 600;
    font-size: 16px;
`

const Save = styled.div`
    flex:0.5;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding:10px;
    margin:4px;
    background-color:#096c20db;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-weight: 600;
    font-size: 16px;
    color: white;

`