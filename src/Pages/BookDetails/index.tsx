import React, { useMemo, useEffect } from 'react'
import styles from './style.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import { getBookState } from '../../store/Slices/bookSlice'
import { useNavigate } from "react-router-dom";

const Index = () => {
    const id = useParams()
    const navigate = useNavigate()
    const { data, loading, error } = useSelector(getBookState);
    const detailsData = useMemo(() => {
        return data && data.find(item => item.id === id.id)
    }, [data, id])
    console.log("+++++", detailsData);

    useEffect(() => {
        detailsData === null && navigate('/')
    }, [detailsData])

    return (
        <>
            <div className={styles.mainWrapper}>
                <div className={styles.innerWrapper}>
                    <button type='button' onClick={() => navigate('/')} >Back</button>
                    <div className={styles.detailsBox}>
                        <div className={styles.leftBox}>
                            {detailsData?.volumeInfo?.imageLinks?.thumbnail ? <img src={detailsData?.volumeInfo?.imageLinks?.thumbnail} alt="img" /> : <div className={styles.imgDummy}></div>}

                        </div>
                        <div className={styles?.rightBox}>
                            <h2>{detailsData?.volumeInfo?.title}</h2>
                            <h4>{detailsData?.volumeInfo?.authors?.join(', ')}</h4>
                            <p>{detailsData?.volumeInfo?.publishedDate}</p>
                            <p>{detailsData?.volumeInfo?.subtitle ? detailsData?.volumeInfo?.subtitle : detailsData?.volumeInfo?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index