import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";
import AppNav from "@components/AppNav";
import SignUp from "@pages/SignUp";

const AppRouter = () => {

    const RedirectToLogin = () => {
        const dashboardUrl = process.env.REACT_APP_MEMBER_DASHBOARD_URL;
        window.location.href = dashboardUrl!;
        return null;
    };

    return (
        <Router>
            <AppNav/>
            <div className="min-vh-100 padding-past-nav">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={RedirectToLogin}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
