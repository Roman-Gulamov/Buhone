import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';


export const MainCarousel = styled.div`
    position: relative;
`

export const CarouselItem = styled.div`
    position: relative;
    height: 83vh;
    cursor: grab;

    @media screen and (max-width: 1024px) {
        height: 77.5vh;
    }

    @media screen and (max-width: 500px) {
        height: 78vh;
    }

    @media screen and (max-width: 281px) {
        height: 73.2vh;
    }

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.5;
    }

    & img {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 42em;
        margin: auto;
        object-fit: cover;

        @media screen and (max-width: 1024px) {
            margin: 0;
        }
    }
`

export const ItemContent = styled.div`
    position: absolute;
    top: 25%;
    left: 13%;
    z-index: 9999;

    @media screen and (max-width: 281px) {
        left: 10%;
    }
`

export const ContentText = styled.h1`
    width: 90%;
    font-size: 3em;
    font-family: ${props => props.theme.fonts.title};
    font-weight: 700;
    color: #fff;
    text-align: left;

    @media screen and (min-width: 1135px) {
        width: 70%;
    }
    
    @media screen and (max-width: 1024px) {
        font-size: 1.7em;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.4em;
    }
`

export const ContentButton = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 3em;

    & button {
        padding: 1.2em 3.8em;
        border: none;
        background-color: ${props => props.theme.colors.brandColor};
        color: #fff;
        cursor: pointer;
        transition: opacity .4s ease, background-color .4s ease;

        &:hover {
            opacity: 0.92;
            background-color: #116062;
        }

        &:active {
            transform: scale(0.98);
        }
        
        @media screen and (max-width: 1024px) {
            padding: 1em 3em;
        }
    }
`

export const MyCarousel = styled(Carousel)`
    &&& .control-arrow {
        opacity: 0.75;
        height: 2.5em;
        width: 2.5em;
        transition: opacity .4s ease;

        &:active, &:hover {
            opacity: 1;
        }

        @media screen and (max-width: 1275px) {
            display: none;
        }
    }
    
    &&& .control-prev {
        background: #c0c0c0;
        top: 80%;
        left: 74%;

        @media screen and (min-width: 1800px) {
            left: 77%;
        }

        @media screen and (max-width: 1799px) {
            left: 75%;
        }

        &:before {
            content: '<';
            border: none;
            color: white;
        }
    }

    &&& .control-next {
        background: #808080;
        top: 80%;
        left: 80%;

        &:before {
            content: '>';
            border: none;
            color: white;
        }
    }

    &&& .control-dots {
        bottom: 11%;
        left: 13%;
        width: auto;

        @media screen and (max-width: 500px) {
            width: 100%;
            left: 0;
        }

        & .dot {
            margin-right: 2em;
        }
    }
`