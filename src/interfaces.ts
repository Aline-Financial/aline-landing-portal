export type AppNavRoute = {
    label: string;
    route: string;
};

export interface AppNavDropdownProps {
    label: string;
    routes: AppNavRoute[];
}
