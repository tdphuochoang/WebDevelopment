import * as types from "./actionType"
import axios from "axios"

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

//Load user
export const loadUsers = () => {
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then(res => {
            console.log("Response", res)
            dispatch(getUsers(res.data));
        }).catch(err => console.log(err))
    }
}

//Delete user
export const deleteUser = (id) => {
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then(res => {
            console.log("Response", res)
            dispatch(userDeleted());
            dispatch(loadUsers())
        }).catch(err => console.log(err))
    }
}