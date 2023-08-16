import { createSlice } from '@reduxjs/toolkit';

export const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchFilmsData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },

    },
});

export const { fetchFilmsData } = filmsSlice.actions;

export default filmsSlice.reducer;
