import { getAlbums, getTodos, getUsers } from "../api"
import { SET_ALBUMS, SET_ERROR, SET_LOADING, SET_TODOS, SET_USERS, SET_POSTS, TOGGLE_SIDEBAR, SET_LIGHT } from "./types";

const setUsers = async (dispatch) => {
    setLoading(dispatch, true);
    const res = await getUsers();
    setLoading(dispatch, false);
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
        setError(dispatch, false);
    }
    else {
        setError(dispatch, true);
    }
}

const setTodos = async (dispatch) => {
    setLoading(dispatch, true);
    const res = await getTodos();
    setLoading(dispatch, false);
    if (res.success) {
        const action = { type: SET_TODOS, payload: res.data };
        dispatch(action);
        setError(dispatch, false);
    }
    else {
        setError(dispatch, true);
    }
}

const setAlbums = async (dispatch) => {
    setLoading(dispatch, true);
    const res = await getAlbums();
    setLoading(dispatch, false);
    if (res.success) {
        const action = { type: SET_ALBUMS, payload: res.data };
        dispatch(action);
        setError(dispatch, false);
    }
    else {
        setError(dispatch, true);
    }
}

const setPosts = async (dispatch) => {
    setLoading(dispatch, true);
    const res = await getAlbums();
    setLoading(dispatch, false);
    if (res.success) {
        const action = { type: SET_POSTS, payload: res.data };
        dispatch(action);
        setError(dispatch, false);
    }
    else {
        setError(dispatch, true);
    }
}

const toggleSidebar = (dispatch) => {
    dispatch({ type: TOGGLE_SIDEBAR });
}

const setLight = (dispatch) => {
    dispatch({ type: SET_LIGHT });
}

const setLoading = (dispatch, value) => {
    dispatch({ type: SET_LOADING, payload: value });
}

const setError = (dispatch, value) => {
    dispatch({ type: SET_ERROR, payload: value });
}

export { setUsers, setTodos, setAlbums, setPosts, toggleSidebar, setLoading, setError, setLight };