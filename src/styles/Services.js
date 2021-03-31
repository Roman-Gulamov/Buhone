import styled from 'styled-components';

export const ServicesContent = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding-bottom: 2em;
`

export const ContentItem = styled.div`
    width: 33%;
    margin-bottom: 2em;
    padding-right: 1em;
    transition: all .5s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 1024px) {
        width: 50%;
    }

    @media screen and (max-width: 621px) {
        width: 100%;
        padding-right: 0;
        margin-bottom: 1em;
    }
`

export const ItemRelative = styled.div`
    position: relative;
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`

export const ItemText = styled.p`
    max-width: 50%;
    font-size: 1.2em;
    font-weight: bold;
    color: #fff;
    padding: 0 0 1.5em 1.5em;

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