import React from 'react';
import { Helmet } from 'react-helmet';

import { ABOUT_DATA } from './AboutData';

import { Wrapper, Description, Title } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import {
    AboutWrapper,
    AboutIntroduce,
    AboutText,
    AboutContent,
    ContentItem,
    ItemCount,
    ItemText,
    MyLink
} from '../../styles/About';


export const About = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>BuhOne | Кейсы</title>
            <meta name="description" content="About" />
            <link rel="canonical" href="https://roman-gulamov.github.io/Buhone/#/about" />
        </Helmet>
        <Wrapper bgWhite about={+true}>
            <Container>
                <AboutWrapper>
                    <AboutIntroduce>
                        <Description about={+true}>О нас</Description>
                        <Title about={+true}>
                            Компания
                            <span>ИвановПром</span>
                        </Title>
                        <AboutText>
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                            В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                            Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.
                        </AboutText>
                    </AboutIntroduce>
                    <AboutContent>
                        {ABOUT_DATA.map(({ id, count, text }) =>
                            <ContentItem key={id}>
                                <ItemCount>{count}</ItemCount>
                                <ItemText>{text}</ItemText>
                                <MyLink to='/contact'>Все кейсы</MyLink>
                            </ContentItem>
                        )}
                    </AboutContent>
                </AboutWrapper>
            </Container>
        </Wrapper>
        </>
    )
}
