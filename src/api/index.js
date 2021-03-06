import axios from "axios"

export const getUsers = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export const getTodos = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export const getAlbums = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums?_limit=10")
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}

export const getPosts = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        return { success: true, data: res.data };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
}