import {createSlice} from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
     initialState : {
        roomId:null,
        currentUser:null,
        profileOpen:false,
        helpOpen: false,
        loggedIn:false,
        modalOpen:false,
    }    ,
    reducers: {
      enterRoom : (state, action) =>  {
        state.roomId = action.payload.roomId
      },
      openProfile :(state,action) => {
        state.profileOpen = action.payload.profileOpen
      },
      openHelp :(state, action) => {
        state.helpOpen = action.payload.helpOpen
      },
      login :(state, action) => {
        state.loggedIn = action.payload.loggedIn
      },
      setCurrentUser : (state, action) => {
        state.currentUser = action.payload.currentUser
      },
      activateModal : (state, action) => {
        state.modalOpen = action.payload.modalOpen
      }

    },
  })
  
  export const { enterRoom,openProfile, openHelp, login, setCurrentUser, activateModal } = appSlice.actions

  export const selectRoomId = state => state.app.roomId
  export const selectProfileOpen = (state) => state.app.profileOpen
  export const selectHelpOpen = state => state.app.helpOpen
  export const selectLoginState = state => state.app.loggedIn
  export const selectCurrentUser = state => state.app.currentUser
  export const selectModalState = state => state.app.modalOpen

  export default appSlice.reducer
  