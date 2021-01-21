import React, { Component } from "react";

export default class FavoriteProductContainer extends Component {
  render() {
    return (
      <div id="my-favorite" className="account-content--box">
            <span className="account__title">Sản phẩm yêu thích (1)</span>
            <div className="account__content">
                <ul className="lst-prod-favorite">
                    <li className="product-item">
                        <a href="/#" className="product-item__thumb">
                            <img src="./images/prod4.jpg" alt="product" />
                            <button className="add-to-cart">
                                <span className="icon icon-libreoffice" /> Add To Cart
                            </button>
                        </a>
                        <div className="product-item__text">
                            <div className="d-flex-start">
                            <h4 className="product-title">
                                <a href="/#">Coffee pot</a>
                            </h4>
                            <div className="product-rate">
                                <div className="product-rate--overlay" style={{ width: "10%" }} />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>

                            </div>
                            <p className="product-price">
                                <span>
                                    <span className="price-symboy">$</span>71.00
                                </span>
                            </p>

                            <p className="product__short-desc"> Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex error omnium interpretaris pro, alia illum ea vim. Alienum phaedrum  torquatos nec eu, vis detraxit periculis ex, nihil interpretaris pro, alia illum ea vim. Alienum phaedrum ...
                            </p>
                        </div>
                        <button className="product-item__del">
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                    </li>

                    <li className="product-item">
                        <a href="/#" className="product-item__thumb">
                            <img src="./images/prod4.jpg" alt="product" />
                            <button className="add-to-cart">
                            <span className="icon icon-libreoffice" /> Add To Cart
                            </button>
                        </a>
                        <div className="product-item__text">
                            <div className="d-flex-start">
                            <h4 className="product-title">
                                <a href="/#">Coffee pot</a>
                            </h4>
                            <div className="product-rate">
                                <div
                                className="product-rate--overlay"
                                style={{ width: "10%" }}
                                />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                                <span className="icon icon-star-full" />
                            </div>
                            </div>
                            <p className="product-price">
                            <span>
                                <span className="price-symboy">$</span>71.00
                            </span>
                            </p>
                            <p className="product__short-desc">
                            Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex
                            error omnium interpretaris pro, alia illum ea vim. Alienum
                            phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
                            interpretaris pro, alia illum ea vim. Alienum phaedrum ...
                            </p>
                        </div>
                        <button className="product-item__del">
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                        </li>
                        <li className="product-item">
                            <a href="/#" className="product-item__thumb">
                                <img src="./images/prod4.jpg" alt="product" />
                                <button className="add-to-cart">
                                <span className="icon icon-libreoffice" /> Add To Cart
                                </button>
                            </a>
                            <div className="product-item__text">
                                <div className="d-flex-start">
                                <h4 className="product-title">
                                    <a href="/#">Coffee pot</a>
                                </h4>
                                <div className="product-rate">
                                    <div
                                    className="product-rate--overlay"
                                    style={{ width: "10%" }}
                                    />
                                    <span className="icon icon-star-full" />
                                    <span className="icon icon-star-full" />
                                    <span className="icon icon-star-full" />
                                    <span className="icon icon-star-full" />
                                    <span className="icon icon-star-full" />
                                </div>
                            </div>

                            <p className="product-price">
                            <span>
                                <span className="price-symboy">$</span>71.00
                            </span>
                            </p>

                            <p className="product__short-desc">
                            Vis ei rationibus definiebas, eu qui purto zril laoreet. Ex
                            error omnium interpretaris pro, alia illum ea vim. Alienum
                            phaedrum torquatos nec eu, vis detraxit periculis ex, nihil
                            interpretaris pro, alia illum ea vim. Alienum phaedrum ...
                            </p>
                        </div>

                        <button className="product-item__del">
                            <span aria-hidden="true" className="icon_close_alt2" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}
