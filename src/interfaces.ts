import {IconProp} from "@fortawesome/fontawesome-svg-core";

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
