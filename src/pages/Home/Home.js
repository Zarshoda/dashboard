import React from 'react'
import { Link } from 'react-router-dom'
import HomeWrapper from './HomeWrapper'

const Home = () => {
    return (
        <HomeWrapper>
            <div className="row">
                <div className="col-md-6">
                    <Link to="/dashboard/users">
                        <div className="cardd">
                            Users
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/dashboard/todos">
                        <div className="cardd">
                            Todos
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/dashboard/albums">
                        <div className="cardd">
                            Albums
                        </div>
                    </Link>
                </div>
                <div className="col-md-6">
                    <Link to="/dashboard/posts">
                        <div className="cardd">
                            Posts
                        </div>
                    </Link>
                </div>
            </div>
        </HomeWrapper>
    )
}

export default Home;
