import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from '../features/films/filmsSlice';
import peopleReducer from '../features/people/peopleSlice'

const store = configureStore({
  reducer: {
    films: filmsReducer,
    people: peopleReducer,
  }
})

export default store;