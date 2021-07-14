import React, {ReactElement} from "react";
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import Landing from "@pages/Landing";
import NotFound from "@pages/NotFound";
import AppNav from "@components/AppNav";
import SignUp from "@pages/SignUp";
import Footer from "@components/Footer";

const AppRouter = () => {

    const RedirectToLogin = () => {
        const dashboardUrl = process.env.REACT_APP_MEMBER_DASHBOARD_URL;
        window.location.href = dashboardUrl!;
        return null;
    };

    const noNavPaths = [
        "/signup"
    ];

    const ExcludeInPath = ({children, exclude}: {children: ReactElement, exclude: string[]}) => {
        const {pathname} = useLocation();
        return exclude.includes(pathname) ? null : <>{children}</>;
    };

    return (
        <Router>
            <ExcludeInPath exclude={noNavPaths}>
                <AppNav/>
            </ExcludeInPath>
            <div className="container-fullscreen padding-past-nav">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={RedirectToLogin}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <ExcludeInPath exclude={noNavPaths}>
                <Footer/>
            </ExcludeInPath>
        </Router>
    );
};

export default AppRouter;
