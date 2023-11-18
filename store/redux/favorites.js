import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
    },

    reducers: {
        addFav: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFav: (state, aciton) => {
            state.ids.splice(state.ids.indexOf(aciton.payload.id), 1);
        }
    }
});


export const addFavorite = favSlice.actions.addFav;
export const removeFavorite = favSlice.actions.removeFav;

export default favSlice.reducer;