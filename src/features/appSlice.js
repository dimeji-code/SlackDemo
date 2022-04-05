import {createSlice} from "@reduxjs/toolkit"

export const appSlice = createSlice({
    name: 'app',
     initialState : {
        roomId:null,
        profileOpen:false,
        helpOpen: false,
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


    
    },
  })
  
  export const { enterRoom,openProfile, openHelp } = appSlice.actions

  export const selectRoomId = state => state.app.roomId
  export const selectProfileOpen = (state) => state.app.profileOpen
  export const selectHelpOpen = state => state.app.helpOpen

  export default appSlice.reducer
  