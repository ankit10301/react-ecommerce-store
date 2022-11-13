import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import ItemContainerCard from "../../Components/ItemContainerCard";

const TrendingItems = () =>{

    const navigate = useNavigate();
    const productPage = (id) => {
        navigate(`/products/${id}`);
    }

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

    return(
        <div style={{backgroundColor: '#f8f8f8'}}>
            <h2 style={{textAlign: 'center'}}>Trending Items</h2>
            <Grid container justifyContent="center" spacing={0}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& > :not(style)': {
                        m: 1,
                        },

                    }}
                >
                    {
                        trendingCardData.map((element, index) => (
                            <ItemContainerCard>
                                <Card id={index} style={{ width: '18rem', height: '25rem', cursor:'pointer' }} onClick={() => productPage(index)}>
                                    <Card.Img variant="top" src={element.imageSrc} />
                                    <Card.Body>
                                        <Card.Text>{element.productCategory}</Card.Text>
                                        <Card.Title>{element.productName}</Card.Title>
                                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                            <p style={{margin: '0'}}>{element.price}</p>
                                            <Button variant="primary" onClick={{}}>{`Add to Cart`}</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </ItemContainerCard>
                        ))
                    }
                </Box>
            </Grid>
        </div>
    )
}

export default TrendingItems;