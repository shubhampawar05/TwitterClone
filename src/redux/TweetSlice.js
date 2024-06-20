import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 allTweets:null

}

export const TweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
   getAllTweets:(state, action)=>{
    state.allTweets = action.payload
   }
   
  },
})

// Action creators are generated for each case reducer function
export const {getAllTweets} = TweetSlice.actions

export default TweetSlice.reducer