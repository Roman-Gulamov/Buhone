import React from 'react';
import { NavLink } from 'react-router-dom';

import { NAV_LINKS } from './NavMap';


export const Header = () => {
    return (
        <> 
        {NAV_LINKS.map(({ path, title }) =>
            <NavLink 
                key={title} 
                to={path} 
                activeStyle={{ background: '#005FA3' }}
            >
                <span>{title}</span>
            </NavLink>
        )}
        </>
    )
}
