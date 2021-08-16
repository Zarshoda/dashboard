import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from '../../redux/actions';
import UsersWrapper from './UsersWrapper'

const Users = () => {
    const users = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <UsersWrapper>
            <table>
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
            </table>
        </UsersWrapper>
    )
}

export default Users;
