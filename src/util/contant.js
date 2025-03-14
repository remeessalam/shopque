import teamImage1 from "../assets/images/team/team-image-1.jpeg";
import teamImage2 from "../assets/images/team/team-image-2.jpeg";
import teamImage3 from "../assets/images/team/team-image-3.png";
//icons
import shipping from "../assets/images/icons/shipping.png";
import achivements from "../assets/images/icons/achivements.png";
import secure from "../assets/images/icons/secure.png";
//categories images
// import accessories from "../assets/images/categories/accessories.jpeg";
// import toys from "../assets/images/categories/toys.jpeg";
// import food from "../assets/images/categories/food.jpeg";
// import cloths from "../assets/images/categories/cloths.jpeg";

export const API_BASE_URL = "https://shopque-backend.vercel.app/api";
// export const API_BASE_URL = "http://localhost:8080/api";

export const companyDetails = {
  name: "shopque",
  email: "email@domain.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  twitter: "https://www.x.com",
  youtube: "https://www.youtube.com",
};
export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/products", label: "Products" },
  // { path: "/blogs", label: "Blog" },
  { path: "/contact-us", label: "Contact Us" },
];
export const petCareFeatures = [
  {
    id: 1,
    title: "Trusted Quality",
    description:
      "We believe your pets deserve only the best. That’s why we offer products from brands you can rely on, all selected for their superior quality and effectiveness.",
  },
  {
    id: 2,
    title: "For Every Stage of Life",
    description:
      "Whether your pet is a playful puppy, a senior dog, a mischievous kitten, or a laid-back adult cat, we have the perfect products to support them at every stage of their life.",
  },
  {
    id: 3,
    title: "Seamless Shopping Experience",
    description:
      "Shopping for your pets has never been easier. Our website is user-friendly, making it simple for you to find what you need and get it delivered straight to your door, fast.",
  },
];

export const ourTeam = [
  {
    id: 1,
    image: teamImage1,
    name: "Caroline Washington",
    position: "Seller",
  },
  {
    id: 2,
    image: teamImage2,
    name: "Gerald Ferguson",
    position: "Seller",
  },
  {
    id: 3,
    image: teamImage3,
    name: "Averi Maddox",
    position: "Seller",
  },
];

export const features = [
  {
    id: 1,
    icon: shipping,
    title: "Free Shipping",
    desc: "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    id: 2,
    icon: achivements,
    title: "Satisfaction Guarantee",
    desc: "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
  },
  {
    id: 3,
    icon: secure,
    title: "Secure Payment",
    desc: "Your security is our priority. Your payments are secure with us.",
  },
];
