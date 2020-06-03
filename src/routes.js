
import React from "react";

import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';

import Home from "./pages/home/Home";
import PageChat from "./pages/chat/index";
import LoginPage from "./pages/login";

import history from './history';
import TurmasPage from "./pages/turmas";

function Routes(){
    return (

        <Router history={history}>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/chat" component={PageChat} />
                <Route exact path="/turmas" component={TurmasPage} />
            </Switch>
        </Router>
    );
}

export default Routes;