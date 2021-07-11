import {LandingCardData} from "@interfaces";

const landingCardsData: LandingCardData[] = [
    {
        icon: ["fas", "map-marked-alt"],
        title: "Easy. Convenient. Everywhere.",
        description: "Spend and deposit your money whenever and where ever you go. Find a local branch near you.",
        buttonText: "Find a Branch",
        buttonRoute: "/branch"
    },
    {
        icon: ["fas", "money-bill-wave"],
        title: "Cash. Loans. Credit. Whenever.",
        description: "Select from a personalized list of personal loans and credit cards to apply for.",
        buttonText: "Apply Today",
        buttonRoute: "/signup"
    },
    {
        icon: ["fas", "lock"],
        title: "Keep Your Money Secure And Everywhere.",
        description: "Have peace of mind taking your money anywhere knowing it's safe with us.",
        buttonText: "Secure Your Cash",
        buttonRoute: "/signup"
    },
    {
        icon: ["fas", "cogs"],
        title: "Manage Your Accounts. Anywhere. Anytime.",
        description: "Deposit. Withdraw. Freeze. Manage your accounts from anywhere 24/7.",
        buttonText: "Dashboard",
        buttonRoute: "/login"
    }
];

export default landingCardsData;
