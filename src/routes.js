
import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import PageChat from "./pages/chat/index";
import LoginPage from "./pages/login";

function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/chat" component={PageChat} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;