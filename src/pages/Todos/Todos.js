import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../../redux/actions';
import TodosWrapper from './TodosWrapper'

const Todos = () => {
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])
    return (
        <TodosWrapper>
            <div className="row">
                {todos.map(v =>
                    <div className="col-md-6">
                        <div className="cardd">
                            {v.title}
                        </div>
                    </div>
                )}
            </div>
        </TodosWrapper>
    )
}

export default Todos
