import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';


export const MyCarousel = styled(Carousel)`
    &&& .carousel-slider {
        overflow: visible;
        user-select: none;
    }

    &&& .slider-wrapper {
        padding-bottom: 6em;

        @media screen and (max-width: 1024px) {
            padding-bottom: 3em;
        }
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

export const CarouselImg = styled.div`
    cursor: grab;
    text-align: left;

    &&& img {
        width: 24%;
        height: auto;

        @media screen and (max-width: 1024px) {
            width: 48%;
            padding-right: 1em;
            margin-bottom: 2em;
        }
    }
`