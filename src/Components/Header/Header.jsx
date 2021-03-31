import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { slide as Menu } from 'react-burger-menu';
import { withSize } from 'react-sizeme'

import Logo from '../../assets/images/Header/Logo.png';
import { INFORM_DATA, NAV_DATA } from './HeaderData';

import '../../styles/burgerMenu.css';
import { Wrapper } from '../../styles/Reusable';
import { Container } from '../../styles/Container';
import {
    HeaderWrapper,
    HeaderLogo,
    LogoImg,
    LogoTitle,
    HeaderBlock,
    BlockInform,
    InformItem,
    BlogNav,
    NavText,
    NavMenu,
    MyNavLink } from '../../styles/Header';


const Header = ({ size }) => {
    const [smallScreen, setSmallCreen] = useState();

    useEffect(() => size.width > 1024 ? setSmallCreen(false) : setSmallCreen(true), [size.width]);

    return (
        <Wrapper as="header" header bgWhite>
            {smallScreen && (
                <NavMenu>
                    <Menu right>
                        {NAV_DATA.map(({ id, path, title }) =>
                            <MyNavLink 
                                key={id} 
                                to={path} 
                                activeClassName='active'
                            >
                                <NavText>{title}</NavText>
                            </MyNavLink>
                        )}
                    </Menu>
                </NavMenu>
            )}
            <Container>
                <HeaderWrapper>
                    <HeaderLogo>
                        <LogoImg>
                            <img src={Logo} alt="logo" />
                        </LogoImg>
                        <LogoTitle>BuhOne</LogoTitle>
                    </HeaderLogo>
                    <HeaderBlock>
                        <BlockInform>
                            {INFORM_DATA.map(({ id, avatar, title }) =>
                                <InformItem key={id}>
                                    <FontAwesomeIcon icon={avatar} size="1x" />
                                    <span>{title}</span>
                                </InformItem>
                            )}
                        </BlockInform>
                        <BlogNav>
                            {NAV_DATA.map(({ id, path, title }) =>
                                <MyNavLink 
                                    key={id} 
                                    to={path} 
                                    activeClassName='active'
                                >
                                    <NavText>{title}</NavText>
                                </MyNavLink>
                            )}
                        </BlogNav>
                    </HeaderBlock>
                </HeaderWrapper>
            </Container>
        </Wrapper>
    )
}

export default withSize()(Header)