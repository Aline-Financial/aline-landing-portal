import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ReactFragment} from "react";

export type AppNavRoute = {
    label: string;
    route: string;
};

export type AppNavDropdownProps = {
    label: string;
    routes: AppNavRoute[];
};

export type LandingCardData = {
    icon: IconProp;
    title: string;
    description: string;
    buttonText: string;
    buttonRoute: string;
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
