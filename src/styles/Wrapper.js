import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${props => props.header && css`
        min-height: 6.9em;
    `}

    ${props => props.bgWhite && css`
        color: '#fff';
    `}

    ${props => props.bgGray && css`
        color: ${props => props.theme.colors.bgGray};
    `}
`