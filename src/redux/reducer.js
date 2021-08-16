import { SET_ALBUMS, SET_TODOS, SET_USERS } from "./types";

const initialState = {
    users: [],
    todos: [],
    albums: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };

        case SET_TODOS:
            return { ...state, todos: action.payload };

        case SET_ALBUMS:
            return { ...state, albums: action.payload };

        default: return state;
    }
}

export default reducer;