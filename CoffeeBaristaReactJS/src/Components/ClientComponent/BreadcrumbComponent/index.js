import React, { Component } from 'react';


export default class BreadcrumbComponent extends Component {
    render() {
        return (
            <div className="main-page__breadcrumb">
                <div className="cf-container d-flex-between full-screen">
                    <h3>My Account</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./index.html">Barista</a></li>
                        <li className="breadcrumb-item"><a href="./my-account.html">My Account</a></li>
                    </ul>
                </div>

                <div className="d-flex-between responsive">
                    <a href="/#" id="beforeNav">
                        <span aria-hidden="true" className="arrow_carrot-left" ></span>
                    </a>
                    <h3 id="titlePage">My Account</h3>
                    <a href="/#" className="cart">
                        <span aria-hidden="true" className="icon_cart_alt" />
                        <span className="number">1</span>
                    </a>
                </div>
            </div>

        )
    }
}
