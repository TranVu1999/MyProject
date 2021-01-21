import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../../Assets/Images/logo-1.png';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="header">
                <div className="d-flex-between px-25 header__content">
                    <div className="header--nav-toggle">
                        <input type="checkbox" id="toggle-menu" />
                        <label htmlFor="toggle-menu" className="toggle">
                            <span />
                            <span />
                            <span />
                            <span />
                        </label>
                    </div>

                    <div className="header__logo">
                        <NavLink exact to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>

                    <nav className="header__nav">
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><a href="/#">About</a></li>
                            <li><a href="/#">Shop</a></li>
                            <li><a href="/#">Blog</a></li>
                            <li><NavLink to="/account">My Account</NavLink></li>
                            <li className="bulkhead"><span /></li>
                            <li><a href="/#" className="header__cart">
                                <span className="icon icon-cart" />
                                <span className="number">0</span>
                            </a></li>
                            <li><a href="/#" className="header__search"><span className="icon icon-search" /></a></li>
                            <li><a href="/#" className="header__humburger"><i className="fas fa-bars" /></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;