import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Cover from '../../assets/images/SaintP.jpg'
import { DESCRIPTION_DATA } from './ContactData';

import { Wrapper, Title } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import {
    ContactCover,
    ContactWrapper,
    ContactDescription,
    DescriptionText,
    DescriptionConnections,
    ConnectionsItem,
    Text
} from '../../styles/Contact';


export const Contact = ({ size }) => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Контакты</title>
            <meta name="description" content="Contact" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/contact" />
        </Helmet>
        <Wrapper as='main' contact>
            <ContactCover src={Cover} alt='Cover' />
            <Container>
                <ContactWrapper>
                    <ContactDescription>
                        <Title contact>Связь с нами</Title>
                        <DescriptionText>
                            У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!
                        </DescriptionText>
                        <DescriptionConnections>
                            {DESCRIPTION_DATA.map(({ id, icon, text, marginRight }) =>
                                <ConnectionsItem key={id} marginRight={marginRight}>
                                    <FontAwesomeIcon icon={icon} size='lg' />
                                    <Text>{text}</Text>
                                </ConnectionsItem>
                            )}
                        </DescriptionConnections>
                    </ContactDescription>
                    <div></div>
                </ContactWrapper>
            </Container>
        </Wrapper>
        </>
    )
}