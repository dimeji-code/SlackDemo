import React, {useState} from 'react'
import styled from 'styled-components'
import MessageIcon  from "@mui/icons-material/Message";

const Threads = () => {
    const [isEmpty, setIsEmpty] = useState(true)
  return (
      <ThreadContainer>
          <ThreadHeader>
          <h2>Threads</h2>
          <MessageIcon />

          </ThreadHeader>
          { isEmpty &&
                // <SubHeader></SubHeader>
                <EmptyDiv>
                    <div>
                        <MessageIcon />
                    </div>
                    <h3>No Threads Available</h3>
                    <h5>To start a thread, create a conversation and add it to the thread.</h5>
                    <button>Learn more about threads</button>
                </EmptyDiv>
          }
          {/* <SubHeader></SubHeader> */}
          <TextArea></TextArea>
    </ThreadContainer>
  )
}

export default Threads
const ThreadContainer = styled.div`
    height: 100%;
    //////
    /* flex-wrap: wrap; */
    /* display: flex; */
    flex:1;
    /* flex-direction: column; */
`

const ThreadHeader= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 70px;
    height:40px;
    padding:15px;
    border-bottom: 1px solid var(--slack-border-white);

  box-shadow: 0 3.8px 6.2px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.3);

  background-color: rgba(238, 237, 228, 0.288);
  > h2{
        font-weight: 700;
        font-size:20px;
    }
    > .MuiSvgIcon-root{
        z-index: 1;
    }

`
const EmptyDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    border-bottom: 1px solid var(--slack-border-white);

    > div{
        color:#921b1b;
    }
    >h5{
        font-weight:300;
        padding:5px;
        text-align: center;
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
    height: 40vh;
`