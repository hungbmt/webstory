import { createSlice } from '@reduxjs/toolkit';

export const GetSubPageSlice = createSlice({
    name: 'subpage',
    initialState: {
        subpage: {
            isfetching: false,
            item: null,
            error: false,
        },
        view: {
            isfetching: false,
            item: null,
            error: false,
        },
    },
    reducers: {
        subpageStart: (state) => {
            state.subpage.isfetching = true;
        },
        subpageSuccess: (state, action) => {
            state.subpage.isfetching = false;
            state.subpage.item = action.payload;
            state.subpage.error = false;
        },
        subpageFault: (state) => {
            state.subpage.isfetching = false;
            state.subpage.error = true;
        },
        viewStart: (state) => {
            state.view.isfetching = true;
        },
        viewSuccess: (state, action) => {
            state.view.isfetching = false;
            state.view.item = action.payload;
            state.view.error = false;
        },
        viewFault: (state) => {
            state.view.isfetching = false;
            state.view.error = true;
        },
    },
});

export const { subpageStart, subpageSuccess, subpageFault, viewStart, viewSuccess, viewFault } =
    GetSubPageSlice.actions;

export default GetSubPageSlice.reducer;
