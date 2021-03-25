import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Main = () => {
    return (
        <Carousel autoPlay={true} emulateTouch={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
            <div>
                <img src="http://placehold.it/350x50" />
                
            </div>
            <div>
                <img src="http://placehold.it/350x50" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="http://placehold.it/350x50" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}
