import React, { Component } from 'react'
import AccountNavComponent from '../../../Components/ClientComponent/AccountNavComponent';
import BreadcrumbComponent from '../../../Components/ClientComponent/BreadcrumbComponent';
import AccountAddressContainer from '../../../Container/ClientContainer/AccountAddressContainer';
import AccountInfoContainer from '../../../Container/ClientContainer/AccountInfoContainer';
import AccountInvoiceContainer from '../../../Container/ClientContainer/AccountInvoiceContainer';
import FavoriteProductContainer from '../../../Container/ClientContainer/FavoriteProductContainer';

// Images
import avatar from './../../../Assets/Images/avatar.png';

export default class AccountPage extends Component {
    render() {
        return (
            <section className = "main-page section-padding">
                <BreadcrumbComponent/>

                <div className="cf-container d-flex-between align-start account-page">
                    <div className="main-page__sidebar account__sidebar">
                        <div className="d-flex-start account__author">
                            <img src = {avatar} alt="avatar" />
                            <div className="account__author--text">
                                <span>Tài khoản này của</span>
                                <h5>Trần Lê Anh Vũ</h5>
                            </div>
                        </div>

                        <AccountNavComponent/>
                    </div>

                    <div class="main-page__content account__container">
                        <div class="account__container--widget">
                            {/* <AccountInfoContainer /> */}
                            {/* <AccountAddressContainer/> */}
                            {/* <FavoriteProductContainer/> */}
                            <AccountInvoiceContainer/>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
