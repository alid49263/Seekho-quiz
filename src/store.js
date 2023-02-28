import { configureStore } from '@reduxjs/toolkit'
import quizSlice from './Slices/quizSlice'

export default configureStore({
  reducer: {
    quiz: quizSlice,
  },
})