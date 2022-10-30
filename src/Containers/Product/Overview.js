import React from "react";
import Div from "../../Components/Div";
import H2 from "../../Components/H2";
import P from "../../Components/P";

const Overview = props =>{

    return(
        <Div style={{textAlign: 'left'}}>
            <P classes='product-description' className="product-des">
                {`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl nunc, 
                    a dictum magna laoreet eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                    posuere cubilia Curae.
                `}
            </P>
            <img style={{maxWidth: '100%', height: 'auto'}} src="https://chekromul.github.io/uikit-ecommerce-template/images/articles/macbook-photo.jpg" alt='macbook'/>
            <P className="product-description" classes='product-description'>
                {`Sed sit amet ante eget nunc dictum auctor sagittis in libero. Aliquam ultricies tincidunt nisi, 
                a vestibulum nisi tempor vitae. Praesent fermentum sem semper fermentum ultrices. Duis eleifend 
                vel sapien dignissim auctor. Vestibulum at commodo leo. In vitae eros ut sapien egestas venenatis 
                non sit amet elit. In gravida vitae ante a rutrum.`}
            </P>
            <H2 classes='overview-h2'>Touch Bar</H2>
            <P className="product-description" classes='product-description'>
                {`Vivamus ornare tortor elit, sed rutrum felis iaculis in. Nunc ut molestie neque. Aenean vitae 
                elementum arcu, at rutrum ligula. Pellentesque fringilla dictum viverra. Vestibulum eu ipsum nec 
                risus pharetra iaculis. Donec quis nulla orci. Suspendisse eget dictum augue, et lobortis justo. 
                Suspendisse velit dui, sollicitudin quis velit nec, tincidunt consequat arcu.`}
            </P>
            <H2 classes='overview-h2'>Retina Display</H2>
            <P className="product-description" classes='product-description'>
                {`Pellentesque dictum imperdiet rutrum. Vestibulum egestas quam eget maximus rutrum. Etiam blandit 
                a dolor laoreet vulputate. Nulla ullamcorper ipsum et libero finibus, vitae vestibulum odio feugiat.`}
            </P>
            <Div style={{maxWidth: '60%', margin: 'auto'}} >
                <img style={{maxWidth: '100%', height: 'auto'}} src="https://chekromul.github.io/uikit-ecommerce-template/images/articles/macbook-promo-4.jpg" alt="macbook display" />
            </Div>
        </Div>
    )
}

export default Overview