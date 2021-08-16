import { getAlbums, getTodos, getUsers } from "../api"
import { SET_ALBUMS, SET_TODOS, SET_USERS } from "./types";

const setUsers = async (dispatch) => {
    const res = await getUsers();
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

const setTodos = async (dispatch) => {
    const res = await getTodos();
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

const setAlbums = async (dispatch) => {
    const res = await getAlbums();
    if (res.success) {
        const action = { type: SET_ALBUMS, payload: res.data };
        dispatch(action);
    }
    else {

    }
}

export { setUsers, setTodos, setAlbums };