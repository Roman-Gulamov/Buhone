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