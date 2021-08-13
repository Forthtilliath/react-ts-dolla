// Si page dark, tout adapter
const data = [
    {
        id: 'about',
        dark: true,
        topLine: 'Premium Bank',
        headLine: 'Unlimited Transactions with zero fees',
        description:
            'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
        buttonLabel: 'Get started',
        imgStart: false,
        img: require('../../images/svg-1.svg').default,
        alt: 'Car',
    },
    {
        id: 'discover',
        dark: false,
        topLine: 'Unlimited Access',
        headLine: 'Unlimited Transactions with zero fees',
        description:
            'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
        buttonLabel: 'Learn More',
        imgStart: true,
        img: require('../../images/svg-2.svg').default,
        alt: 'PiggyBank',
    },
    {
        id: 'signup',
        dark: false,
        topLine: 'Join our Team',
        headLine: 'Creating an account is extremely easy',
        description:
            "Get everything set up and ready in under 10 minutes. All you need to do is add your informations and you're ready to go.",
        buttonLabel: 'Start Now',
        imgStart: false,
        img: require('../../images/svg-3.svg').default,
        alt: 'Paper',
    },
];

export default data;