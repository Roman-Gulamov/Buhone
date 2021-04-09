import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';


export const MyCarousel = styled(Carousel)`
    &&& .carousel-slider {
        overflow: visible;
    }

    &&& .slider-wrapper {
        padding-bottom: 4em;
    }

    &&& .control-dots {
        display: flex;

        @media screen and (max-width: 1024px) {
            justify-content: center;
        }

        & .dot {
            background-color: ${props => props.theme.colors.brandColor};
            margin-right: 2em;
            opacity: .4;

            &.selected {
                opacity: 1;
            }
        }
    }

    &&& .control-arrow {
        top: 30%;
        height: 2em;
        width: 2em;
        background: ${props => props.theme.colors.brandColor};
        opacity: 1;
        transition: all .4s ease;

        @media screen and (max-width: 1275px) {
            display: none;
        }

        &:active, &:hover {
            opacity: .7;
        }
    }
    
    &&& .control-prev {
        left: -4%;
        background: ${props => props.theme.colors.brandColor};

        @media screen and (max-width: 1550px) {
            left: -6%;
        }

        &:before {
            content: '<';
            border: none;
            color: white;
        }
    }

    &&& .control-next {
        right: -4%;
        background: ${props => props.theme.colors.brandColor};

        @media screen and (max-width: 1550px) {
            right: -6%;
        }

        &:before {
            content: '>';
            border: none;
            color: white;
        }
    }
`

export const CarouselWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.bgGray};
    padding: 2.8em 5.8em;
    cursor: default;
    user-select: none;

    @media screen and (max-width: 1024px) {
        padding: 2.8em 1em;
    }

    @media screen and (max-width: 281px) {
        padding: 2.8em 0;
    }
`

export const CarouselReview = styled.div`
    font-size: 1.1em;
    font-weight: 300;
    text-align: left;

    @media screen and (max-width: 281px) {
        padding: 0 1em;
    }
`

export const CarouselPerson = styled.div`
    display: flex;
    margin-top: 2.5em;
`

export const PersonImg = styled.div`
    width: 4em;
    margin-right: 1.5em;

    &&& img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
    }
`

export const PersonAbout = styled.div`
    margin: auto 0;
    text-align: left;
`

export const PersonName = styled.div`
    font-size: 1.1em;
    font-weight: 900;
    text-transform: capitalize;
`

export const PersonPosition = styled.div`
    font-size: 0.88em;
    color: #4f4f4f;

    &:first-letter {
        text-transform: uppercase;
    }
`