import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Error from '../../components/Error';
import { setUsers } from '../../redux/actions';
import UsersWrapper from './UsersWrapper'

const Users = () => {
    const users = useSelector(state => state.users);
    const isLoading = useSelector(state => state.isLoading);
    const isError = useSelector(state => state.isError);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <UsersWrapper>
            {isLoading && <LinearProgress color="secondary" /> ||
                isError && <Error /> ||
                users.length > 0 &&
                < table >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>City</th>
                    </tr>

                    {users.map(v =>
                        <tr>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.phone}</td>
                            <td>{v.website}</td>
                            <td>{v.address.city}</td>
                        </tr>
                    )}
                </table> || "no data"}
        </UsersWrapper >
    )
}

export default Users;
