import svg1 from "../../images/svg-1.svg";
import svg2 from "../../images/svg-2.svg";
import svg3 from "../../images/svg-3.svg";

// Si page dark, tout adapter
const data = [
  {
    id: "about",
    dark: true,
    topLine: "Premium Bank",
    headLine: "Unlimited Transactions with zero fees",
    description:
      "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Get started",
    imgStart: false,
    img: svg1,
    alt: "Car",
  },
  {
    id: "discover",
    dark: false,
    topLine: "Unlimited Access",
    headLine: "Unlimited Transactions with zero fees",
    description:
      "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
    buttonLabel: "Learn More",
    imgStart: true,
    img: svg2,
    alt: "PiggyBank",
  },
  {
    id: "signup",
    dark: false,
    topLine: "Join our Team",
    headLine: "Creating an account is extremely easy",
    description:
      "Get everything set up and ready in under 10 minutes. All you need to do is add your informations and you're ready to go.",
    buttonLabel: "Start Now",
    imgStart: false,
    img: svg3,
    alt: "Paper",
  },
];

export default data;
