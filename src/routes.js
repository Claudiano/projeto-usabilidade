
import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import PageChat from "./pages/chat/index";

function Routes(){
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/chat" component={PageChat} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;