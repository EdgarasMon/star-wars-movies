import { createSlice } from '@reduxjs/toolkit';

export const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchPeopleData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },

    },
});

export const { fetchPeopleData } = peopleSlice.actions;

export default peopleSlice.reducer;
