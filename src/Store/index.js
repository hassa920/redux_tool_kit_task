import {configureStore}  from '@reduxjs/toolkit'
import { userReducer } from './Slice/UserSlice'
import { cacheReducer } from './Slice/UserSlice'


const store =configureStore({

    reducer:{
        users: userReducer,
        cache:cacheReducer
    }
   
}) 

console.log(store)
export default store