import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const HeaderLogo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2em;

    
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: 1em;
        justify-content: center;
    }
`

export const LogoImg = styled.div`
    margin-right: 1.4em;
    padding-top: 0.3em;

    @media screen and (max-width: 1024px) {
        margin-right: 1em;
        padding-top: 0;
    }
`

export const LogoTitle = styled.span`
    font-size: 2.3em;
    font-family: ${props => props.theme.fonts.title};
    color: ${props => props.theme.colors.brandColor};

    @media screen and (max-width: 1024px) {
        font-size: 2em;
    }
`

export const HeaderBlock = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1.4em;

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: 0.7em;
    }
`

export const BlockInform = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

export const InformItem = styled.div`
    color: ${props => props.theme.colors.brandColor};
    margin-right: 0.3em;

    @media screen and (max-width: 1024px) {
        margin-right: 1em;
        line-height: 1.5;
    }

    & span {
        font-size: 0.813em;
        color: ${props => props.theme.colors.textColor};
        margin-left: 0.5em;
    }
`

export const BlogNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const NavText = styled.span`
    margin-right: 0.2em;
    font-size: 0.88em;
    font-weight: 700;
    color: ${props => props.theme.colors.navColor};
    text-transform: uppercase;
    letter-spacing: 10%;
    transition: all .3s ease;

    &:hover {
        color: ${props => props.theme.colors.brandColor};
        text-decoration: underline;
    }
`

export const NavMenu = styled.div`
    & a {
        margin-bottom: 1em;

        & span {
            color: #fff;
            font-size: 1em;
        }
    }
`

export const MyNavLink = styled(NavLink)`
    &.${props => props.activeClassName} {
        & span {
            color: ${props => props.theme.colors.brandColor};
            text-decoration: underline;
        }
    }
`