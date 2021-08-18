import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../containers/container';
import Albums from '../Albums';
import Home from '../Home';
import Posts from '../Posts/Posts';
import Todos from '../Todos';
import Users from '../Users';
import MenuWrapper from './MenuWrapper'

const Menu = () => {
    const { menu } = useParams();
    return (
        <MenuWrapper>
            <Container>
                <h1>{menu}</h1>
                {menu == "home" && <Home />}
                {menu == "users" && <Users />}
                {menu == "todos" && <Todos />}
                {menu == "albums" && <Albums />}
                {menu == "posts" && <Posts />}
            </Container>
        </MenuWrapper>
    )
}

export default Menu;