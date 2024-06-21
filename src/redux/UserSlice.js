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
    followingUpdate:(state,action)=>{
    // unfollow
    if(state.user.following.includes(action.payload)){
        state.user.following = state.user.following.filter((itemId)=>{
            return itemId !== action.payload;
        })
    }else{
        // follow
        state.user.following.push(action.payload);
    }
}
   
  },
})

// Action creators are generated for each case reducer function
export const { getUser,getOtherUser,getUserProfile,followingUpdate} = counterSlice.actions

export default counterSlice.reducer