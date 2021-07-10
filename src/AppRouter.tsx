import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Landing} from "@pages/Landing";
import {NotFound} from "@pages/NotFound";
import {AppNav} from "@components/AppNav";

export const AppRouter = () => {
    return (
        <Router>
            <AppNav/>
            <div className="min-vh-100 padding-past-nav">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};
