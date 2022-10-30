import styled from "styled-components";

const P = styled.p`
    ${
        props =>{
            switch(props.classes){
                case 'product-description':
                    return{
                        maxWidth:'60%', 
                        margin: 'auto', 
                        marginBottom: '30px'
                    }

                default: {}
            }
        }
    }

    @media screen and (max-width: 600px) {
        .product-dess{
            max-width: 80%;
        }
    }
`;

export default P;