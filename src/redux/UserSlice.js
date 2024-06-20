import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user:null,
 otherUser:null,
 profile:null,

}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   getUser:(state, action)=>{
    state.user = action.payload
   },
   getOtherUser:(state, action)=>{
    state.otherUser = action.payload
   },
   getUserProfile:(state, action)=>{
    state.profile = action.payload
   },
   
  },
})

// Action creators are generated for each case reducer function
export const { getUser,getOtherUser,getUserProfile} = counterSlice.actions

export default counterSlice.reducer