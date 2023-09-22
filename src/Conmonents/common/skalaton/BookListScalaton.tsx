import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './style.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'

const BookListScalaton = () => {
    return (
        <div
            className={styles.mainWrapper}
        >
            <Skeleton height={"130px"} width={"100px"} />
            <div className={styles.innerBox}>
                <h3>
                    <Skeleton height={20} width={"80%"} />
                </h3>
                <p>
                    <Skeleton height={20} width={"80%"} />
                </p>
            </div>
        </div>
    )
}

export default BookListScalaton