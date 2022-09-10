import { createSlice } from '@reduxjs/toolkit'

export const TodosReducer = createSlice({
  name: 'todos',
  initialState: [
    // {id: 0, title: "", completed: false}
  ],
  reducers: {
    add: (state, action) => {
        // state.push(action.payload)
        return [...state, action.payload]
    },
    remove: (state, action) => state.filter(e => e.id !== action.payload),
    edit: (state, action) => state.map(e => {

        const [id, newProperty] = action.payload
        if (e.id === id) {
            return {...e, ...newProperty}
        } else {
            return null
        }

        // if (e.id === action.payload[0]) {
        //    return {...e, ...action.payload[1]}
        // } else {
        //     return null
        // }
    })
  }
})

