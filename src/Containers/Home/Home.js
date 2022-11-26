import React, { useEffect } from "react";
import CarouselComponent from "./CarouselComponent";
import TrendingItems from "./TrendingItems";

const Home = () =>{

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div>
            <CarouselComponent/>
            <TrendingItems/>
            <div style={{maxWidth:'80vw', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                <h2>About</h2>
                <p style={{textAlign: 'justify'}}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at neque vulputate, 
                    vestibulum magna in, accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh 
                    faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit 
                    lorem ut finibus semper. Donec ac vehicula erat, nec consequat massa. Quisque rhoncus 
                    fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel 
                    dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque 
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nunc at neque vulputate, 
                    vestibulum magna in, accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh 
                    faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit 
                    lorem ut finibus semper. Donec ac vehicula erat, nec consequat massa. Quisque rhoncus 
                    fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel 
                    dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque 
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at neque vulputate, 
                    vestibulum magna in, accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh 
                    faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit 
                    lorem ut finibus semper. Donec ac vehicula erat, nec consequat massa. Quisque rhoncus 
                    fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel 
                    dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque 
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nunc at neque vulputate, 
                    vestibulum magna in, accumsan urna. Nulla feugiat ipsum ex, molestie porttitor nibh 
                    faucibus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit 
                    lorem ut finibus semper. Donec ac vehicula erat, nec consequat massa. Quisque rhoncus 
                    fermentum sapien id congue. Nam at rutrum turpis. Aliquam sagittis imperdiet tortor vel 
                    dignissim. Ut ipsum nunc, egestas et odio id, vestibulum posuere orci. Orci varius natoque 
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.`}                  
                </p>
            </div>
        </div>
    )
}

export default Home;