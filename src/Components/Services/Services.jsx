import React from 'react';
import { Helmet } from 'react-helmet';

import { SERVICES_DATA } from './ServicesData';
import { Container } from '../../styles/Container';
import { Wrapper } from '../../styles/Wrapper';
import {
    ServicesDescription,
    ServicesTitle,
    ServicesContent,
    ContentItem,
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
            <meta name="description" content="Profile" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/services" />
        </Helmet>
        <Wrapper bgGray>
            <Container>
                <ServicesDescription>Наши услуги</ServicesDescription>
                <ServicesTitle>Мы специализируемся</ServicesTitle>
                <ServicesContent>
                    {SERVICES_DATA.map(({ id, img, title }) =>
                        <ContentItem key={id}>
                            <ItemImg>
                                <img src={img} alt={title} />
                            </ItemImg>
                            <ItemBlack>
                                <BlackInner>
                                    <ItemText>
                                        {title}
                                    </ItemText>
                                </BlackInner>
                            </ItemBlack>
                            <ItemHover></ItemHover>
                        </ContentItem>
                    )}
                </ServicesContent>
            </Container>
        </Wrapper>
        </>
    )
}
