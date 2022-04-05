import React, {useState} from 'react'
import styled from 'styled-components'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import DriveFileRenameOutlineTwoToneIcon from '@mui/icons-material/DriveFileRenameOutlineTwoTone';
import AddIcon from '@mui/icons-material/Add';
const Mentions =() => {
    const [isEmpty, setIsEmpty] = useState(true)
    return (
      <ThreadContainer>
  
          <ContentBody>
              <ThreadHeader>
                  <h2>Slack Connect</h2>
                  <button>
                      View Invitations
                  </button>
              </ThreadHeader>
              { isEmpty &&<div>
                      <EmptyDiv>
                          {/* <div>
                              <AlternateEmailIcon />
                          </div> */}
                          <h3>An easy way to work with anyone outside Company Inc</h3>
                          <h5>Slack Connect makes working with clients, vendors, and partners as pleasant and secure as working with your own team.</h5>
                          <button>
                              <div>
                              <TipsAndUpdatesTwoToneIcon/>
                              </div>
                              See how Slack Connect works.</button>
                      </EmptyDiv>
                      <EmptyDiv2>
                      <h3>How do you want to work together?</h3>
                       <button>
                            <div>
                                <DriveFileRenameOutlineTwoToneIcon/>
                            </div>
                            <div>
                                <h4>Start a direct message.</h4>
                                <h6>Talk one-on-one with anyone</h6>
                            </div>
                        </button>
                        <button>
                            <div>
                                <AddIcon/>
                            </div>
                            <div>
                                <h4>Create a channel.</h4>
                                <h6>Work together with up to 250 companies</h6>
                            </div>
                        </button>

                      </EmptyDiv2>
                      </div>
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
      overflow-y: scroll;

`

const ThreadHeader= styled.div`
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
const EmptyDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45vh;
    border-bottom: 1px solid var(--slack-border-white);
    background-color:#e0eee7;

    >h3{
        /* color: white; */
        font-weight: 800;
        font-size: 26px;
    }
    > h5{
        color:grey;
        font-weight:300;
        padding:5px;
        text-align: center;
    }
    > button{
        display: flex;
        align-items: center;
        outline:none;
        border:1px solid #cacfcf;
        border-radius: 20px;

        padding:10px;
        font-weight: 500;
        >div{
            color:#b3ba7d;
        }
        :hover{
            background-color: #f1f3f6;
            border:1px solid #f8f8f8;
            cursor:pointer
        }
    }
`
const EmptyDiv2 = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45vh;
    border-bottom: 1px solid var(--slack-border-white);
    >h3{
        color: black;
        font-weight: 700;
        font-size: 18px;
    }
    >button{
        border: 1px solid #e2e1e1;
        background-color: white;
        border-radius:8px;
        min-width: 340px;
        display: flex;
        padding:14px 12px;
        margin:5px;
        font-size: 18px;
        align-items: center;
        > div{
            display: flex;
            flex-direction: column;
            margin-left:10px;
            align-items:left;
            text-align:left;
            > .MuiSvgIcon-root {
                border-radius: 20px;
                padding:5px;
                background-color: #d3cfcf5f;
            }
            >h4{
                font-weight: 600;
                font-size: 14px;
                color: #424141;

            }
        >  h6{
            font-weight: 400;
            font-size: 12px;
            color: #6b6a6a;
            }
        }
        :hover{
            background-color: #cfc3cf30;
            cursor:pointer
        }
        

    }
 `