import React from 'react';
import { ThemeProvider } from 'styled-components';
import { 
    HashRouter as Router, 
    Switch, 
    Route, 
    Redirect } from 'react-router-dom';

import { theme } from '../styles/theme';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Services } from './Services/Services';
import { About } from './About/About';
import { Clients } from './Clients/Clients';
import { Reviews } from './Reviews/Reviews';
import { Contact } from './Contact/Contact';

import { GlobalStyle } from '../styles/GlobalStyle';


export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Header />

                <Switch>
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/services' component={Services} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/clients' component={Clients} />
                    <Route exact path='/reviews' component={Reviews} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/contact' />
                </Switch>
            </Router> 
        </ThemeProvider>
    )
}
