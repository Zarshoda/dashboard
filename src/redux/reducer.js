import { SET_ERROR, SET_LOADING, SET_ALBUMS, SET_TODOS, SET_USERS, SET_POSTS, TOGGLE_SIDEBAR, SET_LIGHT } from "./types";

const initialState = {
    isSideBarShow: true,
    users: [],
    todos: [],
    albums: [],
    posts: [],
    isLoading: true,
    isError: true,
    isLight: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };

        case SET_ALBUMS:
            return { ...state, albums: action.payload };

        case SET_POSTS:
            return { ...state, posts: action.payload };

        case TOGGLE_SIDEBAR:
            return { ...state, isSideBarShow: !state.isSideBarShow };

        case SET_LIGHT:
            return { ...state, isLight: !state.isLight };

        case SET_LOADING:
            return { ...state, isLoading: action.payload };

        case SET_ERROR:
            return { ...state, isError: action.payload };

        default: return state;
    }
}

export default reducer;