// import wirelessremotecontrol from "../assets/images/products/wireless-remote-control.jpeg";
// import wirelessremotecontrol1 from "../assets/images/products/wireless-remote-control1.png";
// import wirelessremotecontrol2 from "../assets/images/products/wireless-remote-control2.jpeg";
// import wirelessremotecontrol3 from "../assets/images/products/wireless-remote-control3.jpeg";

// product images
import pettreat1 from "../assets/images/ProductsImage/pettreat1.png";
import pettreat2 from "../assets/images/ProductsImage/pettreat2.png";
import pettreat3 from "../assets/images/ProductsImage/pettreat3.png";
// import pettreat4 from "../assets/images/ProductsImage/pettreat4.png";
import petchewing1 from "../assets/images/ProductsImage/petchewing1.png";
import petchewing2 from "../assets/images/ProductsImage/petchewing2.png";
import petchewing3 from "../assets/images/ProductsImage/petchewing3.png";
// import petchewing4 from "../assets/images/ProductsImage/petchewing4.png";
// import petchewing5 from "../assets/images/ProductsImage/petchewing5.png";
import saturntoy1 from "../assets/images/ProductsImage/saturntoy1.png";
import saturntoy2 from "../assets/images/ProductsImage/saturntoy2.png";
import saturntoy3 from "../assets/images/ProductsImage/saturntoy3.png";
// import saturntoy4 from "../assets/images/ProductsImage/saturntoy4.png";

// export const productDetails = [
//   {
//     id: 1,
//     productName: "E&E Bestlife Smart Car Remote Control",
//     productImage: wirelessremotecontrol,

//     discountPer: 61,
//     actualPrice: 199800,
//     mrp: 5100,
//     images: [
//       wirelessremotecontrol1,
//       wirelessremotecontrol2,
//       wirelessremotecontrol3,
//     ],
//     colors: [
//       { name: "Blue", value: "#6B8CDE", },
//       { name: "Beige", value: "#F8D49A",  },
//       { name: "Green", value: "#7BAF83",  },
//     ],
//     sizes: [
//       { name: "S", },
//       { name: "M",  },
//       { name: "X",  },
//       { name: "XL",  },
//       { name: "XXL",  },
//     ],
//     rating: 5,
//     description: `The Zippty Interactive Laser Toy keeps your pets entertained, active, and healthy. Designed for both cats and dogs, it projects random laser patterns that trigger their natural chase instincts. Its durable, stable design ensures hours of safe and exciting playtime, making it perfect for energetic pets and multi-pet homes.`,
//     additionalInformation: {
//       "Pet toy type": "Excercise Toy",
//       "Target Species": ["Cat", "Vehicle"],
//       "Recommended Uses": "M",
//       "For Product": "Playing",
//       "Cartoon Character": "No",
//       "Indoor/Outdoor Usage": [
//         "Outdoor",
//         "Blue",
//         "Acrylonitrile Butadiene Styrene",
//       ],
//     },
//   },
// ];

export const products = [
  {
    id: 1,
    images: [petchewing1, petchewing2, petchewing3],
    name: "Pet Chewing Toy - Durable & Fun for Your Furry Friend!",
    description: `Give your pet a fun and engaging chewing experience
with this high-quality pet chewing toy! Designed for
durability and comfort, this toy is perfect for keeping
your pet entertained while promoting dental health.`,
    rating: 4.2,
    reviews: 54,
    colors: [
      { name: "Blue", value: "#6B8CDE" },
      { name: "Beige", value: "#F8D49A" },
      { name: "Green", value: "#7BAF83" },
    ],
    sizes: [
      { name: "S" },
      { name: "M" },
      { name: "X" },
      { name: "XL" },
      { name: "XXL" },
    ],
    price: 1534,
    stock: true,
    keyFeatures: [
      "Durable & long-lasting material to withstand heavy chewing.",
      "Promotes dental health by reducing plaque & tartar.",
      "Non-toxic, pet-safe material for worry-free play.",
      "Perfect for small, medium, and large pets.",
      "Engaging design to keep pets entertained.",
    ],
    whyChoose: [
      "Keeps your pet engaged and prevents boredom.",
      "Supports dental hygiene and healthy chewing habits.",
      "Ideal for teething puppies and active chewers.",
      "Made from high-quality, pet-safe materials.",
    ],
  },
  {
    id: 2,
    images: [pettreat1, pettreat2, pettreat3],
    name: "Pet Treat Dispenser Toy - Fun & Engaging for Your Pet!",
    description: `Make playtime exciting and rewarding with this
interactive pet treat dispenser toy! Designed to
stimulate your pet's natural instincts, this fun and
engaging toy dispenses treats as your pet plays, keeping
them active and mentally stimulated.`,
    rating: 4.2,
    reviews: 54,
    colors: [
      { name: "Blue", value: "#6B8CDE" },
      { name: "Beige", value: "#F8D49A" },
      { name: "Green", value: "#7BAF83" },
    ],
    sizes: [
      { name: "S" },
      { name: "M" },
      { name: "X" },
      { name: "XL" },
      { name: "XXL" },
    ],
    price: 1888,
    stock: false,
    keyFeatures: [
      "Interactive treat dispenser keeps pets engaged.",
      "Encourages mental stimulation and problem-solving.",
      "Adjustable treat dispensing mechanism.",
      "Durable and pet-safe materials for long-lasting use.",
      "Ideal for dogs and cats of all sizes.",
    ],
    whyChoose: [
      "Promotes active play and healthy exercise.",
      "Helps reduce boredom and anxiety in pets.",
      "Easy to clean and refill with your pet’s favorite treats.",
      "Great for training and rewarding good behavior.",
    ],
  },
  {
    id: 3,
    images: [saturntoy1, saturntoy2, saturntoy3],
    name: "Saturn-Shaped Interactive Pet Treat Dispenser Toy - Fun & Engaging!",
    description: `Give your furry friend an out-of-this-world playtime
experience with our Saturn-Shaped Interactive Pet
Treat Dispenser Toy! Designed to stimulate your
pet's curiosity and keep them entertained, this unique
toy dispenses treats while rolling unpredictably,
making playtime fun and rewarding.`,
    rating: 4.2,
    reviews: 54,
    colors: [
      { name: "Blue", value: "#6B8CDE" },
      { name: "Beige", value: "#F8D49A" },
      { name: "Green", value: "#7BAF83" },
    ],
    sizes: [
      { name: "S" },
      { name: "M" },
      { name: "X" },
      { name: "XL" },
      { name: "XXL" },
    ],
    price: 2124,
    stock: true,
    keyFeatures: [
      "Unique Saturn-shape design for unpredictable rolling.",
      "Treat-dispensing mechanism encourages play.",
      "Non-toxic, pet-friendly material.",
      "Suitable for both dogs and cats.",
      "Enhances problem-solving skills in pets.",
    ],
    whyChoose: [
      "Provides endless fun and mental stimulation.",
      "Encourages exercise and an active lifestyle.",
      "Keeps pets entertained while you're away.",
      "Easy to clean and refill with treats.",
    ],
  },
];

export const dogfeed = pettreat1;

export const imagetwo = pettreat1;
