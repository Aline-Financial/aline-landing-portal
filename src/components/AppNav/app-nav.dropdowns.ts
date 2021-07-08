import {AppNavDropdownProps} from "./AppNavDropdown/AppNavDropdown.props";

export const AppNavDropdowns: AppNavDropdownProps[] = [
    {
        label: 'Accounts',
        routes: [
            {
                label: 'Checking',
                route: '/accounts#checking'
            },
            {
                label: 'Savings',
                route: '/accounts#savings'
            },
            {
                label: 'Credit Card',
                route: '/accounts#credit-card'
            },
            {
                label: 'Loan',
                route: '/accounts#loan'
            }
        ]
    }
];
