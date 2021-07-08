import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";
import {AppNav} from "./components/AppNav/AppNav";
import {library} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import {IconsConfig} from "./config/icons.config";

export class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        IconsConfig.icons.forEach(icon => library.add(icon));
    }

    render() {
        return (
            <div className={"container-fluid p-0"}>
                <AppNav/>
                <div className={"d-flex flex-column vh-100 justify-content-center align-items-center animate__animated animate__fadeIn"}>
                    <h1 className={"display-1"}>Hello, <span className={"text-primary"}>world!</span></h1>
                </div>
            </div>
        );
    }
}
