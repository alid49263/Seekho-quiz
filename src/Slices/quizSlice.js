import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        answers: {},
        isSubmitted: false,
        time: 60,
        questions: [
            { question: "What is my name?", options: ["Syed", "Messi", "Ronaldo", "Neymar"], answer: "Syed" },
            { question: "Do i watch Football?", options: ["Yes", "No", "Kabhie! Kabhie!", "Ahhh! Noooo."], answer: "Yes" },
            { question: "Which is my favourite club?", options: ["Real Madrid", "Barcelona", "Arsenal", "Liverpool"], answer: "Barcelona" },
            { question: "Who is my favourite Pleyer", options: ["Mbappe", "Messi", "Ronaldo", "Neymar"], answer: "Messi" },
            { question: "Who won 'THE BEST'?", options: ["Mbappe", "Messi", "Ronaldo", "Neymar"], answer: "Messi" },
        ]
    },
    reducers: {
        setAnswers: (state, action) => {
            const { payload } = action
            state.answers = { ...state.answers, ...payload }
        },
        setTime: (state, action) => {
            const { payload } = action
            state.time = payload;
        },
        setSubmitted: (state, action) => {
            const { payload } = action
            state.isSubmitted = payload
        },
    },
})

export const { setSubmitted, setAnswers, setTime } = quizSlice.actions

export const currentAnswers = state => state.quiz.answers
export const isSubmitted = state => state.quiz.isSubmitted
export const quizQuestions = state => state.quiz.questions
export const currentTime = state => state.quiz.time

export default quizSlice.reducer