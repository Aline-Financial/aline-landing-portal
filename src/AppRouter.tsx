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

    const pathIsExcluded = (exclude: string[]) => {
        const {pathname} = useLocation();
        return exclude.includes(pathname);
    };

    const ExcludeInPath = ({children, exclude}: {children: ReactElement, exclude: string[]}) => {
        return pathIsExcluded(exclude) ? null : <>{children}</>;
    };

    const Container = ({children, excludedClass, className, exclude}: {children: ReactElement, className: string, excludedClass: string, exclude: string[]}) => {
        return pathIsExcluded(exclude) ?
            <div className={excludedClass}>
                {children}
            </div> : <div className={className}>{children}</div> ;
    };

    return (
        <Router>
            <ExcludeInPath exclude={noNavPaths}>
                <AppNav/>
            </ExcludeInPath>
            <Container exclude={noNavPaths}
                       excludedClass="min-vh-100 py-4 bg-gray aline-bg"
                       className="container-fullscreen padding-past-nav">
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/login" component={RedirectToLogin}/>
                    <Route component={NotFound}/>
                </Switch>
            </Container>
            <ExcludeInPath exclude={noNavPaths}>
                <Footer/>
            </ExcludeInPath>
        </Router>
    );
};

export default AppRouter;
