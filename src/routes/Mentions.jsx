import React, {useState} from 'react'
import styled from 'styled-components'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Mentions =() => {
    const [isEmpty, setIsEmpty] = useState(true)
    return (
      <ThreadContainer>
  
          <ContentBody>
              <ThreadHeader>
                  <h2>Mentions</h2>
              </ThreadHeader>
              { isEmpty &&
                      <EmptyDiv>
                          <div>
                              <AlternateEmailIcon />
                          </div>
                          <h3>See new activity in real time</h3>
                          <h5>When people react to your messages or mention you or your keywords, you’ll see it here.</h5>
                          <button>Learn more about mentions</button>
                      </EmptyDiv>
              }
          </ContentBody>
      </ThreadContainer>
    )
}

export default Mentions
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
`

const ThreadHeader= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
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
    > h5{
        font-weight:300;
        padding:5px;
        text-align: center;
    }
    > button{
        outline:none;
        border:none;
        background-color: transparent;
        color: #1b1ba8;
        padding:2px;
    }
`
