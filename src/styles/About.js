import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`

export const AboutIntroduce = styled.div`
    width: 43%;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const AboutText = styled.p`
    font-weight: 300;
    color: ${props => props.theme.colors.textColor};

    @media screen and (max-width: 1024px) {
        margin-bottom: 2em;
    }
`

export const AboutContent = styled.div`
    width: 51%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media screen and (min-width: 1500px) {
        width: 48%;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const MyLink = styled(Link)`
    color: ${props => props.theme.colors.brandColor};
    font-weight: 700;
    text-decoration: underline;
`

export const ContentItem = styled.div`
    width: 48%;
    padding: 2.5em;
    margin-bottom: 1em;
    background-color: ${props => props.theme.colors.bgGray};
    transition: background-color .4s ease;

    @media screen and (max-width: 500px) {
        width: 100%;
    }

    &:hover {
        color: #fff;
        background-color: ${props => props.theme.colors.brandColor};

        ${MyLink} {
            color: #fff;
        }
    }
`

export const ItemCount = styled.div`
    font-size: 2.3em;
    font-weight: 900;
`

export const ItemText = styled.div`
    margin: 1em 0 2.5em 0;
    font-weight: 700;
`