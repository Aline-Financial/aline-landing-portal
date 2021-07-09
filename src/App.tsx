import "animate.css/animate.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {library} from "@fortawesome/fontawesome-svg-core";
import React, {Component} from "react";
import {IconsConfig} from "@config/icons.config";
import {AppRouter} from "./AppRouter";

export class App extends Component {

    constructor(props: any) {
        super(props);
        IconsConfig.icons.forEach(icon => library.add(icon));
    }

    render() {
        return (
            <div className="container-fluid p-0 m-0 min-vh-100">
                <AppRouter/>
            </div>
        );
    }
}
