import { 
    ADD_ITEMS,
    GET_ITEMS,
    DELETE_ITEMS,
    ITEMS_LOADING
    } from '../actions/types'
import axios from 'axios'
    
export const getItems = () => dispatch => {
    dispatch(itemsLoading());
    axios
  // "proxy": "http://localhost:5000",
    .get('http://localhost:5000/')
    .then(res => {
        console.log(res)
            dispatch({
                type: GET_ITEMS,
                payload: res.data.msg
            })
        }
        )
    .catch(err => {
        console.log(err)
    })
}

export const addItems = (item) => dispatch => {
    dispatch(itemsLoading())
    axios
    .post('http://localhost:5000', item)
    .then(res => {
        dispatch({
            type: ADD_ITEMS,
            payload: res.data.msg
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteItems = id => dispatch => {
    dispatch(itemsLoading())
    axios
    .delete(`http://localhost:5000/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_ITEMS,
            payload: id
        })
    })
    .catch(err => {
        console.log("err")
        console.log(err)
    })
}

export const itemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}