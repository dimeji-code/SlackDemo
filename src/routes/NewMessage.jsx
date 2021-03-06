import React, {useState} from 'react'
import styled from 'styled-components'
import MessageIcon  from "@mui/icons-material/Message";
import CloseIcon  from "@mui/icons-material/Close";
import NaturePeopleSharpIcon from '@mui/icons-material/NaturePeopleSharp';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewMessage = () => {
    const [isEmpty, setIsEmpty] = useState(true)
  return (
      <MessageContainer>
        {/* <ContentBody> */}
          <MessageHeader>
            <h2>New message</h2>
            <RightBlue>
                <NaturePeopleSharpIcon/>
                <h5>DM outside your company</h5>
                <div>
                    <CloseIcon />
                </div>
            </RightBlue>
          </MessageHeader>
          <SubHeader>
            <h5>To:</h5>
            <div>
                <input placeholder="#a-channel, @somebody, or somebody@example.com"></input>
            </div>
          </SubHeader>
          { isEmpty &&
                <EmptyDiv>
                    <div>
                        <MessageIcon />
                    </div>
                    <h3>No Threads Available</h3>
                    <h5>To start a thread, create a conversation and add it to the thread.</h5>
                    <button>Learn more about threads</button>
                </EmptyDiv>
          }
          <TextArea style={{marginLeft:15,marginRight:15,}}>
            <Editor
            
            //   editorState={editorState}
            toolbar={{
                inline : {inDropdown : true},
                list : {inDropdown : true},
                textAlign : {inDropdown : true},
                link : {inDropdown : true}

            
            }}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            //   onEditorStateChange={this.onEditorStateChange}
            />;
          </TextArea>
          <button>Submit</button>
        {/* </ContentBody> */}


    </MessageContainer>
  )
}

export default NewMessage
const MessageContainer = styled.div`
    height: 100%;
    flex:1;
      overflow-y: scroll;

    /* max-width: 100%; */
    /* display: flex;
    flex-direction: column; */
`
// const ContentBody = styled.div`
//     height: 100%;
//     display: flex;
//     flex:1;
//     flex-direction: column;
// `
const RightBlue = styled.div`
    display: flex;
    background-color: #b3c9d852;
    align-items: center;
    border-radius: 10px;
    padding: 5px;
    color: #3b79a1;

    :hover{
        color: #15537c;
        cursor:pointer;
    }
    > h5{
        font-size: 12px;
        font-weight: 600;
        padding:5px;
    }
    > .MuiSvgIcon-root {
        font-size: 20px;
        padding:2px
    }
    > div .MuiSvgIcon-root{
        display: flex;
        font-size: 16px;
        :hover{
            background-color: #f1ecf1d5;
            border-radius: 3px;
        }
    }
`
const MessageHeader= styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
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

`
const SubHeader = styled.div`
  background-color: rgba(248, 248, 242, 0.938);
  box-shadow: 0 3.8px 6.2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  padding:5px;
  align-items: center;
  >div{
      margin-left: 5px;
      display: flex;
      max-width: 40vw;
      flex:0.7;

      >  input{
      flex:1;
      border:none;
     min-height: 30px;
     background-color:transparent;
      outline: none;
      font-size: 16px;
  }
  }

`
const EmptyDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    /* border-bottom: 1px solid var(--slack-border-white); */

    > div{
        color:#921b1b;
    }
    >h5{
        font-weight:300;
        padding:5px;
    }
    >button{
        outline:none;
        border:none;
        background-color: transparent;
        color: #1b1ba8;
        padding:2px;
    }

    /* flex:0.7; */
`
const TextArea = styled.div`
    align-items: center;
    justify-content: center;
    height: 30vh;
    border: 2px solid var(--slack-border-white);
    border-radius:4px;
`