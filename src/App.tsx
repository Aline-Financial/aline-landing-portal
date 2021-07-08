import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";
import {AppNav} from "./components/AppNav/AppNav";
import {library} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import {IconsConfig} from "./config/icons.config";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AppRouter} from "./AppRouter";

export class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        IconsConfig.icons.forEach(icon => library.add(icon));
    }

    render() {
        return (
            <div className={"container-fluid p-0"}>
                <AppRouter/>
            </div>
        );
    }
}
