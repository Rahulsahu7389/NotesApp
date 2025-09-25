import { configureStore } from '@reduxjs/toolkit'
import pasterReducer from './redux/pasteSlice.jsx'

export const store = configureStore({
  reducer: {
    paste:pasterReducer
  },
})