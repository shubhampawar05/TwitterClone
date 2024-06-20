import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import TweetSlice from './TweetSlice'

export const store = configureStore({
  reducer: {
    user:UserSlice,
    tweet:TweetSlice
  },
})