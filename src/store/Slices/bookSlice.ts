import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { fetchBookData, fetchBookDataById, resetBookData } from "../actions";

interface InitialState {
    data: null | any[],
    loading: boolean,
    error: null | string
    total: number
}

const initialState: InitialState = {
    data: null,
    total: 0,
    loading: false,
    error: null
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBookData.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchBookData.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.items || []
                state.total = action.payload.totalItems || 0
                state.error = null
            })
            .addCase(fetchBookData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || ""
            })

        builder.addCase(resetBookData, (state) => {
            state.data = []
            state.total = 0
        })
    }
})

export const getBookState = (state: RootState) => state.bookData

export default bookSlice.reducer