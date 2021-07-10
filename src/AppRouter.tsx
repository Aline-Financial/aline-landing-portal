import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Landing} from "@pages/Landing";
import {NotFound} from "@pages/NotFound";
import {AppNav} from "@components/AppNav";
import {SignUp} from "@pages/SignUp";

export const AppRouter = () => {
    return (
        <Router>
            <AppNav/>
            <div className="min-vh-100 padding-past-nav">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};
