import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import appleRewards from "../../DemoImages/appleRewards.png";
import TrendingItems from "../Home/TrendingItems";
import "./cartStyle.css";

const Cart = props => {

    const navigate = useNavigate();
    const [isCollipsibleOn, setIsCollipsibleOn] = useState(false);
    const [originalPrice, setOriginalPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const data = [
            {
                pId: '0',
                imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg',
                productCategory: 'Laptop',
                productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
                price: 1300,
                pricePerItem: 1300,
                originalPrice: 1569,
                originalPricePerItem: 1569,
                itemCount: 1
            },
            {
                pId: '1',
                imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg',
                productCategory: 'Laptop',
                productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
                price: 1300,
                pricePerItem: 1300,
                originalPrice: 1569,
                originalPricePerItem: 1569,
                itemCount: 1
            },
            {
                pId: '2',
                imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg',
                productCategory: 'Laptop',
                productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
                price: 1300,
                pricePerItem: 1300,
                originalPrice: 1569,
                originalPricePerItem: 1569,
                itemCount: 1
            }
        ];

        setCartData(data);
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        let totalOriginalPrice = 0;
        let totalPriceAfterDiscount = 0;
        let discount = 0;

        cartData.map(ele => {
            totalOriginalPrice = totalOriginalPrice + ele.originalPrice;
            totalPriceAfterDiscount = totalPriceAfterDiscount + ele.price;
            return null;
        })
        discount = totalOriginalPrice - totalPriceAfterDiscount;
        
        setOriginalPrice(totalOriginalPrice);
        setSubTotal(totalPriceAfterDiscount);
        setDiscount(discount);
    }, [cartData])

    function navigateProduct(id){
        navigate(`/products/${id}`)
    }

    function updateBillingInfo(){
        let totalOriginalPrice = 0;
        let totalPriceAfterDiscount = 0;
        let discount = 0;

        cartData.map(ele => {
            totalOriginalPrice = totalOriginalPrice + ele.originalPrice;
            totalPriceAfterDiscount = totalPriceAfterDiscount + ele.price;
            return null;
        })
        discount = totalOriginalPrice - totalPriceAfterDiscount;
        
        setOriginalPrice(totalOriginalPrice);
        setSubTotal(totalPriceAfterDiscount);
        setDiscount(discount);
    }

    function handleItemCount (id, operator) {
        if(cartData.length > 0){
            let tempData = cartData;
            const item = tempData.map(ele => ele.pId).indexOf(id);
            const currentCount = cartData[item].itemCount;
            if(operator === "+"){
                tempData[item].itemCount = currentCount + 1;
                tempData[item].price = tempData[item].price + tempData[item].pricePerItem;
                tempData[item].originalPrice = tempData[item].originalPrice + tempData[item].originalPricePerItem;
            } else if(currentCount > 1){
                tempData[item].itemCount = currentCount - 1;
                tempData[item].price = tempData[item].price - tempData[item].pricePerItem;
                tempData[item].originalPrice = tempData[item].originalPrice - tempData[item].originalPricePerItem;
            }
            setCartData(tempData);
            updateBillingInfo();
        } else {
            return;
        }
    }

    function removefromCart(id){
        let tempData = cartData;
        const itemIndex = tempData.map(ele => ele.pId).indexOf(id);
        delete tempData[itemIndex];
        setCartData(tempData);
        updateBillingInfo();
    }

    return(
        <div>
            <section className="cart-section">
                <div id="cart_header">
                    <a href="/" className="cart-continue">Continue Shopping</a>
                    <h1 className="your-cart">Your Cart</h1>
                </div>
                <div id="cart-details" className="cart-details">
                    <div className="cart-items">
                        {cartData && cartData.map(element => (
                            <div className="item-list">
                            <div className="item-thumbnail-container">
                                <img className="item-thumbnail" src={element.imageSrc} alt={element.productCategory} width="120px"/>
                                <div className="quantity-container-mobile-view">
                                    <button
                                        className="items-quantity left-border" 
                                        onClick={(e) => handleItemCount(element.pId, "-")}
                                    >-</button>
                                    <span className="quantity-count">{element.itemCount}</span>
                                    <button
                                        className="items-quantity right-border" 
                                        onClick={(e) => handleItemCount(element.pId, "+")}
                                    >+</button>
                                </div>
                            </div>

                            <div className="details-container-div">
                                <div className="details-container">
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div>
                                            <p onClick={() => navigateProduct(element.pId)} className="item-name">{element.productName}</p>
                                        </div>
                                        <div className="item-title-div">
                                            <i onClick={() => removefromCart(element.pId)} className="fa fa-times remove-button" aria-hidden="true"></i>
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
                                        <button
                                            className="items-quantity left-border" 
                                            onClick={(e) => handleItemCount(element.pId, "-")}
                                        >-</button>
                                        <span id="item_count" className="quantity-count">{element.itemCount}</span>
                                        <button 
                                            className="items-quantity right-border" 
                                            onClick={(e) => handleItemCount(element.pId, "+")}
                                        >+</button>
                                    </div>
                                </div>

                                <div className="utility-buttons">
                                    <i onClick={() => removefromCart(element.pId)} className="fa fa-times remove-button" aria-hidden="true"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>

                    <div className="billing-info-container">
                        <div className="price-breakup-div">
                            <div className="price-breakup"><h6>Original Price</h6><span>{`$${originalPrice}`}</span></div>
                            <div className="price-breakup"><h6>You Save</h6><span>{`-$${discount}`}</span></div>
                            <div className="subtotal">
                                <div className="price-breakup"><h5><strong>Subtotal</strong></h5><strong>{`$${subTotal}`}</strong></div>
                                <div className="price-breakup"><h6>Shipping</h6><span>Free</span></div>
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
            <TrendingItems />
        </div>
    )
}

export default Cart;