import { LinearProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../components/Error';
import { setTodos } from '../../redux/actions';
import TodosWrapper from './TodosWrapper'

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const isLoading = useSelector(state => state.isLoading);
    const isError = useSelector(state => state.isError);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])
    return (
        <TodosWrapper>
            {isLoading && <LinearProgress color="secondary" /> ||
                isError && <Error /> ||
                todos.length > 0 &&
                <div className="row">
                    {todos.map(v =>
                        <div className="col-md-6">
                            <div className="cardd">
                                {v.title}
                            </div>
                        </div>
                    )}
                </div> || "no data"}
        </TodosWrapper>
    )
}

export default Todos;
