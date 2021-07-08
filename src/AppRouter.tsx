import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Landing} from "./components/Landing/Landing";
import {AppNav} from "./components/AppNav/AppNav";
import {NotFound} from "./components/NotFound/NotFound";

export class AppRouter extends React.Component<any, any> {

    render() {
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
    }
}
