import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import axios from 'axios';
import useActions from '../../hooks/use-actions';
import { getqueryState } from '../../store/Slices/querySlice';
import { useSelector } from "react-redux";
import { getBookState } from '../../store/Slices/bookSlice';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
    };
}

const Index = () => {
    const { fetchBookData, setQuery, resetBookData } = useActions()
    const { query } = useSelector(getqueryState);
    const isInitial = useRef(false)

    useEffect(() => {
        let timer: any;
        if (isInitial.current) {
            if (query) {
                timer = setTimeout(() => {
                    fetchBookData({ q: query, num: 0 })
                }, 700);
            } else {
                resetBookData()
            }
        }
        isInitial.current = true
        return () => {
            if (timer) {
                clearTimeout(timer)
            }
        }
    }, [query, fetchBookData, resetBookData])

    console.log("query", query);


    return (
        <div className={styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.searchBoxMain}>
                    <input type="text" name='search' placeholder='Search...' value={query} className={styles.searchBox} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Index