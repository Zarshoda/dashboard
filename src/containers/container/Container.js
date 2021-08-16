import { faOpencart } from '@fortawesome/free-brands-svg-icons'
import { faHome, faRandom, faTable, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import ContainerWrapper from './ContainerWrapper'
import { Link } from "react-router-dom"

const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            <div className="sidebar">
                <h1>Menu</h1>
                <List>
                    <Link to="/dashboard/home">
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faHome} className="text-white fs-3" />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/users">
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faUser} className="text-white fs-3" />
                            </ListItemIcon>
                            <ListItemText primary="Users" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/todos">
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faRandom} className="text-white fs-3" />
                            </ListItemIcon>
                            <ListItemText primary="Todos" />
                        </ListItem>
                    </Link>
                    <Link to="/dashboard/albums">
                        <ListItem button>
                            <ListItemIcon>
                                <FontAwesomeIcon icon={faTable} className="text-white fs-3" />
                            </ListItemIcon>
                            <ListItemText primary="Albums" />
                        </ListItem>
                    </Link>
                </List>
            </div>
            <div className="rightside">
                <header>
                    <img src="https://icons-for-free.com/iconfiles/png/512/mario+mario+bros+mario+world+mushroom+toad+videogame+icon-1320196400529338074.png" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container;