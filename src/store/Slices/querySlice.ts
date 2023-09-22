import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
    query: string,
    currentPage: number
}

const initialState = {
    query: "",
    currentPage: 0
} as InitialState

const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
    },
})

export const getqueryState = (state: RootState) => state.queryData
export const { setQuery, setCurrentPage } = querySlice.actions

export default querySlice.reducer