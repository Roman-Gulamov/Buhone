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

    ${props => props.bgWhite && css`
        background-color: #fff;
    `}

    ${props => props.bgGray && css`
        background-color: ${props => props.theme.colors.bgGray};
    `}
`

export const Description = styled.p`
    font-size: 1.2em;
    padding-top: 1em;
    font-weight: bold;
    color: ${props => props.theme.colors.titleColor};

    @media screen and (max-width: 621px) {
        font-size: 1em;
        text-align: center;
    }
`

export const Title = styled.h1`
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.desColor};
    font-size: 2.5em;
    font-weight: 900;
    margin-bottom: 0.5em;

    @media screen and (max-width: 621px) {
        font-size: 1.5em;
        text-align: center;
    }

    ${props => props.about && css`
        & span {
            display: block;
            font-family: inherit;
            color: ${props => props.theme.colors.brandColor};
        }
    `}
`