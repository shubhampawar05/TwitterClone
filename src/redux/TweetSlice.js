import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 allTweets:null,
  refresh:false,
  isActive:false
}

export const TweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
   getAllTweets:(state, action)=>{
    state.allTweets = action.payload
   },
   getRefresh:(state)=>{
    state.refresh =!state.refresh
   },
   getIsActive:(state,action)=>{
    state.isActive= action.payload
   }
   
  },
})

// Action creators are generated for each case reducer function
export const {getAllTweets,getRefresh , getIsActive} = TweetSlice.actions

export default TweetSlice.reducer