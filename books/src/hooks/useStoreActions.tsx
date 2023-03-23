import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { allActionCreators } from "../store";

const useStoreActions = () => {
    const dispatch = useDispatch()
    const actions = allActionCreators()
    return bindActionCreators(actions, dispatch)
}

export default useStoreActions