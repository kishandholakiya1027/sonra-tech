import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { getBookState } from '../../store/Slices/bookSlice';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookListScalaton from '../common/skalaton/BookListScalaton';
import ReactPaginate from 'react-paginate';
import { getqueryState } from '../../store/Slices/querySlice';
import useActions from '../../hooks/use-actions';

const Index = () => {

    const { fetchBookData, setCurrentPage } = useActions()
    const { query, currentPage } = useSelector(getqueryState);

    console.log("currentPage", currentPage);


    const { data, loading, error, total } = useSelector(getBookState);
    const navigate = useNavigate()
    const itemsPerPage = 10

    const pageCount = Math.ceil(total / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        setCurrentPage(event.selected)
        const startIndex = event.selected * itemsPerPage
        fetchBookData({ q: query, num: startIndex })
    };

    return (
        <div className={styles.tableContainer}> {/* Apply a class for styling */}
            {
                loading ?
                    <>
                        <BookListScalaton />
                        <BookListScalaton />
                        <BookListScalaton />
                        <BookListScalaton />
                    </>
                    : (!loading && error) ?
                        <p>{error}</p>
                        :
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((book) => (
                                        <tr key={book.id} onClick={() => navigate(`/bookDetails/${book.id}`)} >
                                            <td>{book?.volumeInfo?.imageLinks?.thumbnail ? <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="img" /> : <div className={styles.imgDummy}></div>}</td>
                                            <td>{book.volumeInfo.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
            }
            {data && !!data.length && <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage={currentPage}
            />}

        </div>
    )
}

export default Index