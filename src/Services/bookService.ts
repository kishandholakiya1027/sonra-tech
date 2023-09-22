import axios from 'axios';
import api from './api';

const getBookData = (query: string, num: number) => {
    return api(`/books/v1/volumes?q=${query}&startIndex=${num}&maxResults=10&key=${process.env.REACT_APP_GOOGLE_API_KEY}`, "get", null)
}

const getBookDataById = (bookId: string) => {
    return api(`/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`, "get", null)
}

export {
    getBookData,
    getBookDataById
}