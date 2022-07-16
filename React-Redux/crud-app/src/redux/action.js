import * as types from "./actionType"
import axios from "axios"

//Action
const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

const userAdded = () => ({
    type: types.ADD_USER
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user
})

const userUpdated = () => ({
    type: types.UPDATE_USER,
   
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

//Add user
export const addUser = (user) => {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_API}`, user).then(res => {
            console.log("Response", res)
            dispatch(userAdded());
            dispatch(loadUsers());
        }).catch(err => console.log(err))
    }
}

//Get single user
export const getSingleUser = (id) => {
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then(res => {
            console.log("Response", res)
            dispatch(getUser(res.data));
        }).catch(err => console.log(err))
    }
}

//Update user
export const updateUser = (user, id) => {
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`, user).then(res => {
            console.log("Response", res)
            dispatch(userUpdated());
        }).catch(err => console.log(err))
    }
}