import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export const AboutIntroduce = styled.div`
    width: 45%;

    @media screen and (max-width: 621px) {
        width: 100%;
    }
`

export const AboutText = styled.p`
    font-weight: 300;
    color: ${props => props.theme.colors.textColor};
`

export const AboutContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 45%;
    padding-top: 1em;

    @media screen and (max-width: 621px) {
        width: 100%;
    }
`

export const ContentItem = styled.div`
    width: 50%;
    background-color: ${props => props.theme.colors.bgGray};

    @media screen and (max-width: 621px) {
        width: 100%;
    }
`

export const ItemCount = styled.div`
    font-size: 3em;
    font-weight: 900;
`

export const ItemText = styled.div`
    font-weight: 700;
`

export const MyLink = styled(Link)`
    color: ${props => props.theme.colors.brandColor};
    font-weight: 700;
    text-decoration: underline;
`