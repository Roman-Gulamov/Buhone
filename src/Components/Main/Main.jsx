import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { MAIN_DATA } from './MainData';
import { carouselSettings } from './carouselSettings';

import {
    MyCarousel,
    MainCarousel,
    CarouselItem,
    ItemContent,
    ContentText,
    ContentButton } from '../../styles/Main';



export const Main = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Главная</title>
            <meta name="description" content="Main" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/main" />
        </Helmet>
        <MyCarousel {...carouselSettings}>
            {MAIN_DATA.map(({ id, img, title }) =>
                <MainCarousel key={id}>
                    <CarouselItem>
                        <img src={img} alt={id} />
                        <ItemContent>
                            <ContentText>{title}</ContentText>
                            <ContentButton>
                                <Link to='/about'>
                                    <button>Наша презентация</button>
                                </Link>
                            </ContentButton>
                        </ItemContent>
                    </CarouselItem>
                </MainCarousel>
            )}
        </MyCarousel>
        </>
    )
}
