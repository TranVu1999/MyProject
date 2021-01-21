import React, { Component } from 'react'

export default class AccountAddressContainer extends Component {
    render() {
        return (
            <div class="account-content--box">
                <span class="account__title">Địa chỉ của tôi</span>

                <div class="account__content">
                    <div class="account__address">
                        <div class="add-address">
                            <a href="/#" class="d-flex-start">
                                <span aria-hidden="true" class="icon_plus"></span> Thêm địa chỉ mới
                            </a>
                        </div>

                        <ul class="lst-address">
                            <li class="item">
                                <div class="info">
                                    <div class="name">
                                        Trần Lê Anh Vũ
                                        <span class="notify">
                                            <span aria-hidden="true" class="icon_check_alt2"></span>
                                            <span>Địa chỉ mặc định</span>
                                        </span>
                                    </div>
                                    <div class="address">
                                        <span>Địa chỉ: </span>
                                        156b, Lã Xuân Oai, Phường Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh
                                    </div>
                                    <div class="phone">
                                        <span>Điện thoại: </span>
                                        0377670509
                                    </div>

                                    <div class="respon-info">
                                        Trần Lê Anh Vũ - 0377670509
                                    </div>
                                </div>
                                <div class="action">
                                    <a href="/#" class="edit">Chỉnh sửa</a>
                                </div>
                            </li>

                            <li class="item">
                                <div class="info">
                                    <div class="name">
                                        Trần Lê Anh Vũ
                                    </div>
                                    <div class="address">
                                        <span>Địa chỉ: </span>
                                        156b, Lã Xuân Oai, Phường Tăng Nhơn Phú A, Quận 9, Hồ Chí Minh
                                    </div>
                                    <div class="phone">
                                        <span>Điện thoại: </span>
                                        0377670509
                                    </div>
                                    <div class="respon-info">
                                        Trần Lê Anh Vũ - 0377670509
                                    </div>
                                </div>
                                <div class="action">
                                    <a href="/#" class="edit">Chỉnh sửa</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
