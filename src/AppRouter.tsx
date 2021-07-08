import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Landing} from "./components/Landing/Landing";
import {AppNav} from "./components/AppNav/AppNav";
import {NotFound} from "./components/NotFound/NotFound";

export class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <AppNav/>
                <Route path="/" exact component={Landing}/>
                <Route path="/*" component={NotFound}/>
            </Router>
        );
    }
}
