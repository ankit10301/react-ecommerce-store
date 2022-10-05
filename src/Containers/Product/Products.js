import React from "react";
import { useNavigate, useParams } from 'react-router-dom';

const Products = () => {

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
    
    return(
        <div style={{margin: '30px'}}>
            <div style={{border: 'solid 1px black', borderRadius: '20px', height: '30px', width: '200px', cursor:'pointer', textAlign: 'center'}} onClick={backToHomePage}>{`< Back To Home Page`}</div>
            <div style={{marginLeft: '10vw', marginRight: '10vw', borderRadius: '8px', backgroundColor: '#f8f8f8'}}>
                <img src={trendingCardData[params.id].imageSrc} alt={trendingCardData[params.id].productName} />
                <p>{trendingCardData[params.id].productCategory}</p>
                <h3>{trendingCardData[params.id].productName}</h3>
                <b>{trendingCardData[params.id].price}</b>
            </div>
        </div>
    )
}

export default Products;