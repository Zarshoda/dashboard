import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../components/Error';
import { setPosts } from '../../redux/actions';
import PostsWrapper from './PostsWrapper'

const Posts = () => {
    const posts = useSelector(state => state.posts);
    const isLoading = useSelector(state => state.isLoading);
    const isError = useSelector(state => state.isError);

    const dispatch = useDispatch();

    useEffect(() => {
        setPosts(dispatch);
    }, [])
    return (
        <PostsWrapper>
            {isLoading && <LinearProgress color="secondary" /> ||
                isError && <Error /> ||
                posts.length > 0 &&
                <div className="row">
                    {posts.map(v =>
                        <div className="col-lg-4 col-md-6">
                            <div className="cardd">
                                <h1>{v.title}</h1>
                                <p>{v.body}</p>
                            </div>
                        </div>
                    )}
                </div> || "no data"}
        </PostsWrapper>
    )
}

export default Posts;
