import React from 'react';
import { Helmet } from 'react-helmet';

import { CLIENTS_DATA } from './ClientsData';
import { carouselSettings } from '../Services/carouselSettings';

import { Wrapper, Description, Title } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import { MyCarousel, CarouselImg } from '../../styles/Clients';


export const Clients = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Клиенты</title>
            <meta name="description" content="Clients" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/clients" />
        </Helmet>
        <Wrapper as='main' bgGray clients>
            <Container>
                <Description paddingNone>Наши клиенты</Description>
                <Title carousel>С нами работают</Title>
                <MyCarousel {...carouselSettings}>
                    {CLIENTS_DATA.map(({ id, brandOne, altOne, brandTwo, altTwo, brandThree, altThree, brandFour, altFour }) =>
                        <CarouselImg key={id}>
                            <img src={brandOne} alt={altOne} />
                            <img src={brandTwo} alt={altTwo} />
                            <img src={brandThree} alt={altThree} />
                            <img src={brandFour} alt={altFour} />
                        </CarouselImg>
                    )}
                </MyCarousel>
            </Container>
        </Wrapper>
        </>
    )
}
