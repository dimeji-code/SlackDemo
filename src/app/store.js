// Redux is a global store used for state management.
// We dispatch data into the global store with assigned actions
import {configureStore} from '@reduxjs/toolkit'
import  appReducer  from '../features/appSlice'

const store =   configureStore({
    reducer:{
        app: appReducer
    }
});

export default store