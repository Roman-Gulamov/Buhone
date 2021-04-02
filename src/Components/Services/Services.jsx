import React from 'react';
import { Helmet } from 'react-helmet';

import { SERVICES_DATA } from './ServicesData';
import { Container } from '../../styles/Container';
import { Wrapper, Description, Title } from '../../styles/Reusable';
import {
    ServicesContent,
    ContentItem,
    ItemRelative,
    ItemImg,
    ItemBlack,
    BlackInner,
    ItemText,
    ItemHover } from '../../styles/Services';


export const Services = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Услуги</title>
            <meta name="description" content="Services" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/services" />
        </Helmet>
        <Wrapper as='main' bgGray>
            <Container>
                <Description>Наши услуги</Description>
                <Title>Мы специализируемся</Title>
                <ServicesContent>
                    {SERVICES_DATA.map(({ id, img, alt, text }) =>
                        <ContentItem key={id}>
                            <ItemRelative>
                                <ItemImg>
                                    <img src={img} alt={alt} />
                                </ItemImg>
                                <ItemBlack>
                                    <BlackInner>
                                        <ItemText>
                                            {text}
                                        </ItemText>
                                    </BlackInner>
                                </ItemBlack>
                                <ItemHover></ItemHover>
                            </ItemRelative>
                        </ContentItem>
                    )}
                </ServicesContent>
            </Container>
        </Wrapper>
        </>
    )
}
