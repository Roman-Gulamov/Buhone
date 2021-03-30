import styled from 'styled-components';


export const ServicesDescription = styled.p`
    font-size: 1.2em;
    padding-top: 1em;
    font-weight: bold;
    color: ${props => props.theme.colors.titleColor};

    @media screen and (max-width: 621px) {
        font-size: 1em;
        text-align: center;
    }
`

export const ServicesTitle = styled.h1`
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.desColor};
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 0.5em;

    @media screen and (max-width: 621px) {
        font-size: 1.5em;
        text-align: center;
    }
`

export const ServicesContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2em;
`

export const ContentItem = styled.div`
    position: relative;
    width: 17.5em;
    margin-bottom: 2em;

    @media screen and (max-width: 621px) {
        width: 100%;
        margin-bottom: 1em;
    }
`

export const ItemImg = styled.div`
    height: 20em;

    & img {
        width: 100%;
        height: 100%;
        margin: auto;
        object-fit: cover;
    }
`

export const ItemBlack = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`

export const BlackInner = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ItemText = styled.p`
    max-width: 50%;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    padding: 0 0 1.5em 1.5em;
    z-index: 9999;

    @media screen and (max-width: 621px) {
        max-width: 100%;
        font-size: 1.5em;
    }

    @media screen and (max-width: 281px) {
        padding: 0 0 1.5em 0.4em;
    }
`

export const ItemHover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color:  ${props => props.theme.colors.brandColor};
    opacity: 0;
    transition: all .4s ease;

    &:hover {
        opacity: 0.5;
    }
`