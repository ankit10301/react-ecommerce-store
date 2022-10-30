import styled from "styled-components";

const Div = styled.div`
    ${
        props => {
            switch(props.classes){
                case 'horizontal-seperator':
                    return{
                        width: '100%',
                        height: '4px',
                        backgroundColor: '#f8f8f8',
                        margin: 0,
                        padding: 0
                    }
                case 'vertical-seperator':
                    return{
                        width: '1px',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.55)',
                        margin: 0,
                        padding: 0
                    }
                case 'product-info-button-inactive':
                    return{
                        maxWidth: 'fit-content',
                        maxHeight: 'fit-content',
                        color: '#999',
                        backgroundColor: '#fff',
                        borderRadius: '4px',
                        padding: '5px',
                        cursor: 'pointer'
                    }
                case 'product-info-button-active':
                    return{
                        maxWidth: 'fit-content',
                        maxHeight: 'fit-content',
                        color: '#fff',
                        backgroundColor: '#1e87f0',
                        borderRadius: '4px',
                        padding: '5px',
                        cursor: 'pointer'                        
                    }
                case 'products-main-container':
                    return{
                        padding: '30px', 
                        backgroundColor: '#f8f8f8'
                    }
                case 'products-container':
                    return{
                        backgroundColor: 'white',
                        boxShadow: '0 5px 15px rgba(0,0,0,.08)', 
                        borderRadius: '4px', 
                        marginLeft: '10vw', 
                        marginRight: '10vw',
                        display:'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center', 
                        justifyContent: 'center'
                    }
                case 'back-to-home':
                    return{
                        border: 'solid 1px black', 
                        borderRadius: '20px', 
                        height: '30px', 
                        width: '200px', 
                        cursor:'pointer', 
                        textAlign: 'center',
                        marginLeft: '10vw', 
                        marginBottom: '30px'
                    }
                case 'products-tabs':
                    return{
                        display: 'flex', 
                        justifyContent: 'space-evenly', 
                        alignItems: 'center', 
                        margin: 'auto', 
                        width: '40%',
                        paddingLeft: '20px',
                        paddingRight: '20px'
                    }
                default: 
                    return{}
            }
        }
    }

    @media screen and (max-width: 600px) {
        .resize-screen{
          margin-left: 0;
          margin-right: 0;
          padding: 0;
        }
        .products-tabs{
            width: 100%;
            overflow: auto;
            display: -webkit-box;
        }
        .tab-buttons{
            margin-right: 30px;
        }
    }

`;

export default Div;