import React from 'react';
import { Helmet } from 'react-helmet';

import { REVIEWS_DATA } from './ReviewsData';
import { carouselSettings } from '../Services/carouselSettings';

import { Wrapper, Title, Description } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import { 
    MyCarousel,
    CarouselWrapper,
    CarouselReview,
    CarouselPerson,
    PersonImg,
    PersonAbout,
    PersonName,
    PersonPosition } from '../../styles/Reviews';


export const Reviews = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Отзывы</title>
            <meta name="description" content="Reviews" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/reviews" />
        </Helmet>
        <Wrapper as='main' bgWhite marginTop marginBottom>
            <Container>
                <Description>Отзывы</Description>
                <Title>Ваши благодарности</Title>
                <MyCarousel {...carouselSettings}>
                    {REVIEWS_DATA.map(({ id, photo, name, position, review }) =>
                        <CarouselWrapper key={id}>
                            <CarouselReview>{review}</CarouselReview>
                            <CarouselPerson>
                                <PersonImg>
                                    <img src={photo} alt={name} />
                                </PersonImg>
                                <PersonAbout>
                                    <PersonName>{name}</PersonName>
                                    <PersonPosition>{position}</PersonPosition>
                                </PersonAbout>
                            </CarouselPerson>
                        </CarouselWrapper>
                    )}
                </MyCarousel>
            </Container>
        </Wrapper>
        </>
    )
}
