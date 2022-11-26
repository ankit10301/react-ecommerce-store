import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Div from "../../Components/Div";
import Overview from "./Overview";

const Products = () => {

    const [selectedTab, setSelectedTab] = useState('OVERVIEW');

    const navigate = useNavigate();
    const params = useParams();
    const trendingCardData = [
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/7/7-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
        {
            imageSrc: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/8/8-medium.jpg',
            productCategory: 'Laptop',
            productName: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
            price: '$1300'
        },
    ]

    const backToHomePage = () => {
        navigate('/');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    
    return(
        <Div>
            <Div classes='products-main-container' className='resize-screen'>
                <Div 
                    classes='back-to-home'
                    className='resize-screen'
                    onClick={backToHomePage}
                >
                    {`< Back To Home Page`}
                </Div>
                <Div 
                    classes='products-container'
                    className='resize-screen'
                >
                    <Div>
                        <img style={{maxWidth: '100%'}} src={trendingCardData[params.id].imageSrc} alt={trendingCardData[params.id].productName} />
                        <p>{trendingCardData[params.id].productCategory}</p>
                        <h3>{trendingCardData[params.id].productName}</h3>
                        <h3 style={{color: 'rgba(0,0,0,0.55)'}}>{trendingCardData[params.id].price}</h3>
                    </Div>
                    <Div classes='horizontal-seperator' />
                    <Div style={{marginTop: '20px', marginBottom: '10px', width: '100%'}}>
                        <Div classes='products-tabs' className='products-tabs'>
                            <Div className="tab-buttons" classes = {selectedTab ==="OVERVIEW" ? 'product-info-button-active' : 'product-info-button-inactive'} onClick={() => setSelectedTab('OVERVIEW')}>OVERVIEW</Div>
                            <Div className="tab-buttons" classes = {selectedTab ==="SPECIFICATIONS" ? 'product-info-button-active' : 'product-info-button-inactive'} onClick={() => setSelectedTab('SPECIFICATIONS')}>SPECIFICATIONS</Div>
                            <Div className="tab-buttons" classes = {selectedTab ==="ACCESSORIES" ? 'product-info-button-active' : 'product-info-button-inactive'} onClick={() => setSelectedTab('ACCESSORIES')}>ACCESSORIES</Div>
                            <Div className="tab-buttons" classes = {selectedTab ==="REVIEWS" ? 'product-info-button-active' : 'product-info-button-inactive'} onClick={() => setSelectedTab('REVIEWS')}>REVIEWS</Div>
                        </Div>
                        <Div style={{marginTop: '30px'}}>
                            <Overview id={params.id} />
                        </Div>
                    </Div>
                </Div> 
            </Div>
        </Div>
    )
}

export default Products;