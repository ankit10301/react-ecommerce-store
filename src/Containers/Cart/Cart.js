import React, { useState } from "react";
import appleRewards from "../../DemoImages/appleRewards.png";
import "./cartStyle.css";

const Cart = props => {

    const [isCollipsibleOn, setIsCollipsibleOn] = useState(false);

    const cartData = [
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300',
            originalPrice: '$1569'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300',
            originalPrice: '$1569'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300',
            originalPrice: '$1569'
        }
    ];

    return(
        <div>
            <section className="cart-section">
        <div id="cart_header">
            <a href="/" className="cart-continue">Continue Shopping</a>
            <h1 className="your-cart">Your Cart</h1>
        </div>
        <div id="cart-details" className="cart-details">
            <div className="cart-items">
                {cartData.map(element => (
                    <div id="item_1" className="item-list">
                    <div sclass="item-thumbnail-container">
                        <img className="item-thumbnail" src={element.imageSrc} alt={element.productCategory} width="120px"/>
                        <div className="quantity-container-mobile-view">
                            <button id="minus_button" className="items-quantity left-border">-</button><span id="item_count" className="quantity-count">1</span><button id="plus_button" className="items-quantity right-border">+</button>
                        </div>
                    </div>

                    <div className="details-container-div">
                        <div className="details-container">
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <div>
                                    <a href="#home" className="item-name">{element.productName}</a>
                                </div>
                                <div className="item-title-div">
                                    <i id="remove_button" parentContainerId="item_1" className="fa fa-times remove-button" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="item-details"><strong>SKU</strong><span>4226249</span></div>
                            <div>{element.productCategory}</div>
                            <div className="ratings-container-div">
                                <div className="ratings-container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                    <div className="ratings-details">4.0</div>
                                    <div className="ratings-details review-count">(32)</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item-price-container">
                        <div className="item-price">
                            <div>
                                <h4>{element.price}</h4><h5 className="original-item-price">{element.originalPrice}</h5>
                            </div>
                            <span className="discount-text">Additional 17% Off</span>
                            <div className="quantity-container">
                                <button id="minus_button" className="items-quantity left-border">-</button>
                                <span id="item_count" className="quantity-count">1</span>
                                <button id="plus_button" className="items-quantity right-border">+</button>
                            </div>
                        </div>

                        <div className="utility-buttons">
                            <i id="remove_button" parentContainerId="item_1" className="fa fa-times remove-button" aria-hidden="true"></i>
                        </div>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>

            <div className="billing-info-container">
                <div className="offer-ribbon">
                    <i className="fa fa-gift" aria-hidden="true"></i>
                    <span>Early Black Friday Blowout Up to 80% OFF + Free shipping using code BLKFRI</span>
                </div>
                <div className="price-breakup-div">
                    <div className="price-breakup"><h6>Original Price</h6><span>$4707</span></div>
                    <div className="price-breakup"><h6>You Save</h6><span>-$807</span></div>
                    <div className="subtotal">
                        <div className="price-breakup"><h5><strong>Subtotal</strong></h5><strong>$3900</strong></div>
                        <div className="price-breakup"><h6>Shipping</h6><span>Calculated at Checkout</span></div>
                    </div>
                </div>
                <div className="p1-rewards">
                    <div className="p1-rewards-display">
                        <div className="p1-rewards-display">
                            <img style={{borderRadius: '20px'}} src={appleRewards} alt="apple rewards" height="50px"/>
                            <div className="switch-container">
                                <label className="switch">
                                    <input type="checkbox" checked/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end'}}>
                            <div className="choose-p1-plan">$9.99/Mo.</div>
                            <div className="choose-p1-plan">$69.00/Yr.</div>
                        </div>                        
                    </div>

                    <div>
                        <button style={{borderRadius: isCollipsibleOn ? "8px 8px 0 0" : "8px"}} type="button" className="collapsible" onClick={() => setIsCollipsibleOn(!isCollipsibleOn)}>Learn more ...</button>
                        <div style={{display: isCollipsibleOn ? "block" : "none"}} className="content">
                            <p style={{lineHeight: '18px', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl nunc, 
                            a dictum magna laoreet eget. Vestibulum ante ipsum primis:</p>
                            <ul>
                                <li>Sed sit amet ante eget nunc dictum</li>
                                <li>Sed sit amet ante eget nunc dictum</li>
                                <li>Sed sit amet ante eget nunc dictum</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="coupon-info-div">
                    <i className="fa fa-tags" aria-hidden="true"></i>
                    <span>Sed sit amet ante eget nunc dictum auctor sagittis</span>
                </div>
                <button className="checkout-btn"><i className="fa fa-shopping-cart" aria-hidden="true"></i>{` Checkout`}</button>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Cart;