import {createSlice} from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
     initialState : {
        roomId:null,
        profileOpen:false,
        helpOpen: false,
        loggedIn:false
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

    },
  })
  
  export const { enterRoom,openProfile, openHelp, login } = appSlice.actions

  export const selectRoomId = state => state.app.roomId
  export const selectProfileOpen = (state) => state.app.profileOpen
  export const selectHelpOpen = state => state.app.helpOpen
  export const selectLoginState = state => state.app.loggedIn

  export default appSlice.reducer
  