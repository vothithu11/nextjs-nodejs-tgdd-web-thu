import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    product: {},
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1;
            state.product = action.payload;
        },
        decrement: (state) => {
            state.value -= 1;
            if (state.value < 0) {
                state.value = 0;
            }
        },
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
