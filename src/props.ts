import {AppNavRoute} from "@interfaces";
import {ReactFragment} from "react";

export type AppNavDropdownProps = {
    label: string;
    routes: AppNavRoute[];
};
export type LandingSectionProps = {
    image: string;
    title: ReactFragment;
    body: ReactFragment;
    buttonText: string;
    buttonRoute: string;
    align: "start" | "end";
    light?: boolean;
};
