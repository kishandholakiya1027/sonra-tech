import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import { getBookData, getBookDataById } from "../../Services/bookService"

interface Query {
    q: string,
    num: number
}

export const fetchBookData = createAsyncThunk("book/fetchData", async ({ q, num }: Query) => {
    const response = await getBookData(q, num)
    return response.data
})

export const fetchBookDataById = createAsyncThunk("book/fetchData", async (id: string) => {
    const response = await getBookDataById(id)
    return response.data
})

export const resetBookData = createAction("reset")