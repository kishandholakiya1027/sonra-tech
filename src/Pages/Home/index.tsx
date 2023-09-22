import React from 'react'
import SearchBox from '../../Conmonents/SearchBox/index'
import TableData from '../../Conmonents/TableData/index'
import styles from './style.module.scss'

const index = () => {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <SearchBox />
                <TableData />
            </div>
        </div>
    )
}

export default index