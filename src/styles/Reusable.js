import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
    ${props => props.header && css`
        height: 17vh;

        @media screen and (max-width: 1024px) {
            margin-bottom: 2em;
        }

        @media screen and (max-width: 281px) {
            margin-bottom: 4em;
        }
    `}

    ${props => props.clients && css`
        height: 83vh;
        padding-top: 3em;

        @media screen and (max-width: 600px) {
            height: 79vh;
        }
    `}

    ${props => props.bgWhite && css`
        background-color: #fff;
    `}

    ${props => props.bgGray && css`
        background-color: ${props => props.theme.colors.bgGray};
    `}

    ${props => props.marginTop && css`
        margin-top: 1.5em;
    `}
    
    ${props => props.marginBottom && css`
        margin-bottom: 1.5em;
    `}
`

export const Description = styled.p`
    font-size: 1.2em;
    padding-top: 1em;
    font-weight: bold;
    color: ${props => props.theme.colors.titleColor};

    @media screen and (max-width: 1024px) {
        text-align: center;
    }

    @media screen and (max-width: 621px) {
        font-size: 1em;
        text-align: center;
    }

    ${props => props.paddingNone && css`
        padding-top: 0;
    `}
`

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.desColor};
    font-size: 2.5em;
    font-weight: 900;
    margin-top: 0.3em;
    margin-bottom: 0.7em;

    @media screen and (max-width: 1024px) {
        text-align: center;
    }

    @media screen and (max-width: 621px) {
        font-size: 2em;
    }

    @media screen and (max-width: 500px) {
        font-size: 1.5em;
    }

    ${props => props.about && css`
        & span {
            display: block;
            font-family: inherit;
            color: ${props => props.theme.colors.brandColor};
        }
    `}

    ${props => props.carousel && css`
        margin-bottom: 1.5em;
    `}
`