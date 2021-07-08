import React from "react";

export class Landing extends React.Component<any, any> {
    render() {
        return (
            <div className={"d-flex flex-column vh-100 justify-content-center align-items-center animate__animated animate__fadeIn"}>
                <h1 className={"display-1"}>Hello, <span className={"text-primary"}>world!</span></h1>
            </div>
        );
    }
}
