import React ,{useState, useEffect,useRef} from 'react';
import styled from "styled-components"
import {getDatabase, ref, onValue, update, set, push,child} from "firebase/database"
import {selectCurrentUser} from "../features/appSlice"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom";

var messageEx =[{message:"hey",date:"1234"}, {message:"there", date:"678"}]

function AddChannel(props) {
    const {state} = useLocation();
    const { selectedChan } = state;
    let myUser = useSelector(selectCurrentUser)
    var all = []
    const [text, setText] = useState("")

    const getUsers = (someUid) =>{ //use this to get message sender (name soon)
        const db = getDatabase()
        const postsData = ref(db, 'users/');
        var theUser =""
        onValue(postsData, (snapshot)=>{
            const data = snapshot.val();
 
            for (var i in data){
                if(i == someUid){
                     console.log("user list index:", i)
                console.log("user", data[i].email)
                theUser = data[i].email
                break;
                }
                

            }
           

        })
        return theUser
    }
    getUsers()

    const getPostData = () =>{ //use this to get posts
        const db = getDatabase()
        const postsData = ref(db, 'posts/');

        onValue(postsData, (snapshot)=>{
            const data = snapshot.val();
 
            for (var i in data){
                if(data[i].roomId == selectedChan.channelId)
                all.push(data[i])
            }
        })
        // console.log("all posts in this channel->",all )
    }

    // useEffect(() =>{
        getPostData()
    // },[])

    const handleAdd = () =>{
        var date = new Date();
        if(text!=""){
            writeNewPost(date, text, myUser)
        }

    }

    function writeNewPost(today, newMessage, userEntry) {

        // console.log(userEntry)
        // console.log("date is:u,", today.toString())
        const db = getDatabase();
        const postListRef = ref(db, 'posts');
        const newPostRef = push(postListRef);

        set(newPostRef, {
             post:newMessage,
            roomId: selectedChan.channelId,
            date:today.toString(),
            user:userEntry.uid
        });
        setText("")
        // getChannelData()

    }

    const convertDate = (dateString) =>{
    const today = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var todaysDate = `${months[today.getMonth()] + " "+today.getDate() + ", " + today.getFullYear()}`
    return todaysDate
    }

    const convertTime = (dateString) => {
    const today = new Date(dateString);
    return today.toLocaleTimeString('en-US',{hour: '2-digit', minute:'2-digit'})
    }


    const Item = (message) =>{
        // console.log("messages are:",message);
        var messageDate = convertDate(message.date)
        var messageTime = convertTime(message.date)
        var messageName = getUsers(message.name)
        
        return(
            <ChannelItem>
                <TimeHeader>
                    <div>{messageDate}</div>
                </TimeHeader>
                <Body>
                    <UserImage>
                    <img src="./user.png"/>
                    </UserImage>
                    <Content>
                        <ChannelItemHeader>
                            <h4>{messageName}</h4>
                            <h5>{messageTime}</h5>
                        </ChannelItemHeader>
                        <p>{message.message}</p>
                        
                    </Content>
                </Body>
            </ChannelItem>
        )
    }


  return (
    <ThreadContainer>
        <ContentBody>
            <AddHeader>
            <h2>{selectedChan.name}</h2>
            {/* <h2>{selectedChan.name}{selectedChan.channelId}</h2> */}
                <button>
                    Testing
                </button>
            </AddHeader>
            <Middle>
                {all.map((data,index) => ( 
                <Item key={index} message={data.post} name={data.user} date={data.date} />
                ))}
            </Middle>
            <Bottom>
                <label for="w3review">Add to Channel:</label>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Jot something down" onChange={(txt)=> setText(txt.target.value)} value={text}></textarea>
                <div>
                    <button onClick={() =>{handleAdd()}}>Submit</button>
                </div>
            </Bottom>

            
            
        </ContentBody>
    </ThreadContainer>  )
}

export default AddChannel
const TimeHeader = styled.div`
    /* border-bottom: 1px solid #ccc; */
    padding:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    >div{
        border: 1px solid #ccc;
        padding: 6px;
        border-radius: 8px;
        background-color: #e6e3e385;
    }
`
const Body = styled.div`
    padding:10px;
    display: flex;
`
const Middle = styled.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    overflow-y: overlay;
    flex:0.7;

`
const Bottom = styled.div`
    border: 1px solid #ccc;
    padding:10px;
    display: flex;
    flex-direction: column;
    flex:0.3;
    min-height: 200px;
    padding-bottom: 10px;
    >div{
        padding: 10px 0;
        >button{
            outline: none;
            border: 1px solid #ccc;
            padding:10px;
            border-radius: 6px;
            color: white;
            font-weight: 700;
            background-color: var(--slack-color);
            :hover{
                background-color: var(--slack-color-hover);
                cursor:pointer;
                border: 1px solid var(--slack-color);
                box-shadow: 0 2.8px 4.2px rgba(0, 0, 0, 0.1),0 2.8px 3.2px rgba(0, 0, 0, 0.2);
            }

        }
    }

`
const ThreadContainer = styled.div`
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: row;
`

const ContentBody = styled.div`
    height: 100%;
    display: flex;
    flex:1;
    flex-direction: column;
      overflow-y: scroll;

`

const AddHeader= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    /* margin-top: 59px; */
    min-height:30px;
    padding:12px;
    border-bottom: 1px solid var(--slack-border-white);

  box-shadow: 0 3.8px 6.2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.3);

  background-color: rgba(238, 237, 228, 0.288);
  > h2{
        font-weight: 700;
        font-size:20px;
    }
    >button{
        font-weight: 600;
        border: 1px solid #abaaaa;
        padding:4px 10px;
        /* padding-right:8px; */
        border-radius:4px;
    }

`
const ChannelItem = styled.div`
    border: 1px solid #ccc;
    width: 100%;
    /* min-height: 100px; */
    display: flex;
    flex-direction: column;
    padding:10px 20px ;

`
const ChannelItemHeader = styled.div`
    display: flex;
    align-items: center;
    >h4{
        font-size: 16px;
        font-weight:700;
    }
    >h5{
        margin-left: 5px;
        font-size: 14px;
        font-weight:300;
        color: grey;
    }

`
const Content = styled.div`
    /* display: flex; */
    margin-left:15px;

`
const UserImage = styled.div`
    border: 1px solid #ccc;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    > img{
        object-fit: contain;
    }
`




