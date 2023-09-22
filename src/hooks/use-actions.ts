import { useDispatch } from "react-redux"
import { actionCreators } from "../store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch])
}

export default useActions