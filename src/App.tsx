import "bootstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import React from "react";
import {IconsConfig} from "@config/icons.config";
import AppRouter from "./AppRouter";

const App = () => {

    IconsConfig.icons.forEach(icon => library.add(icon));

    return (
        <div className="container-fluid p-0 m-0 min-vh-100 h-100">
            <AppRouter/>
        </div>
    );
};

export default App;
