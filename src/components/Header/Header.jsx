import React from 'react';
import { Container } from './index.js';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn.jsx';



const Header = () => {
    const authStatus = useSelector(state => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            isActive: true
        },
        {
            name: 'Login',
            slug: '/login',
            isActive: !authStatus
        },
        {
            name: 'SignUp',
            slug: '/signup',
            isActive: !authStatus
        },
        {
            name: 'Logout',
            slug: '/logout',
            isActive: authStatus
        },
        {
            name: 'Profile',
            slug: '/profile',
            isActive: authStatus
        },
        {
            name: 'All Posts',
            slug: '/posts',
            isActive: authStatus
        },
        {
            name: 'Create Post',
            slug: '/create',
            isActive: authStatus
        },
    ]
    return (
        <header className="header">
            <Container>
                <nav className="nav">
                    <ul className="nav__list">
                        {navItems.map((item, index) =>
                            item.isActive ? (
                                <li key={index} className="nav__item">
                                    <Link to={item.slug} className="nav__link">
                                        {item.name}
                                    </Link>
                                </li>
                            ) : null
                        )}


                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>

                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;