import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import bookData from './Slices/bookSlice'
import queryData from './Slices/querySlice'

export const store = configureStore({
    reducer: {
        bookData,
        queryData
    },
});

export type RootState = ReturnType<typeof store.getState>