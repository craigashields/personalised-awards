const products = [
  {
    title: "VIP Medal",
    handle: "vip-medal",
    price: "2.50",
    description: "Awesome Medal",
    externalUrl: "",
    features: [
      "100% Recycled acrylic",
      "50cm x 50cm",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage: "https://i.postimg.cc/1XmXLVk5/vip-medal-transparent.png",
    images: [
      {
        url: "https://i.postimg.cc/1XmXLVk5/vip-medal-transparent.png",
        altText: "Single Black Medal",
      },
      {
        url: "https://i.postimg.cc/JzFRSxwX/gallery-6.jpg",
        altText: "Collection of Blue Medals",
      },
    ],
    bestSeller: true,
  },
  {
    title: "Universal Award",
    handle: "universal-award",
    price: "8.50",
    description: "",
    externalUrl: "",

    features: [
      "100% Recycled acrylic",
      "15cm tall",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage:
      "https://i.postimg.cc/52Xt8V5y/universal-award-transparent.png",
    images: [
      {
        url: "https://i.postimg.cc/52Xt8V5y/universal-award-transparent.png",
        altText: "Universal Award",
      },
    ],

    bestSeller: false,
  },
  {
    title: "Premier Award",
    handle: "premier-award",
    price: "16.50",
    description: "",
    externalUrl: "",

    features: [
      "100% Recycled acrylic",
      "20cm tall x 10 cm wide",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage: "https://i.postimg.cc/qqtHCZdz/premier-award-sharks.jpg",
    images: [
      {
        url: "https://i.postimg.cc/5tLDGr9m/premier-award-transparent.png",
        altText: "Premier Award - Transparent",
      },
      {
        url: "https://i.postimg.cc/sg5yc8GW/premier-award-rylands.jpg",
        altText: "Premier Award - Rylands Football Club",
      },
      {
        url: "https://i.postimg.cc/qqtHCZdz/premier-award-sharks.jpg",
        altText: "Premier Award - Huddersfield Sharks",
      },
      {
        url: "https://i.postimg.cc/7LV4v2VY/premier-award-woolston-u14.jpg",
        altText: "Premier Award - Woolston U14s",
      },
    ],
    bestSeller: true,
  },
  {
    title: "Shirt Award",
    handle: "shirt-award",

    price: "10.00",
    description: "",
    externalUrl: "",

    features: [
      "100% Recycled acrylic shirt with matching short design",
      "16.5cm tall",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage: "https://i.postimg.cc/bwffsTVw/shirt-award-bolton.jpg",
    images: [
      {
        url: "https://i.postimg.cc/R0bzM6JZ/shirt-award-transparent.png",
        altText: "Shirt Award",
      },
      {
        url: "https://i.postimg.cc/763DGy51/gallery-5.jpg",
        altText: "Shirt Award Moore United",
      },
      {
        url: "https://i.postimg.cc/SNpHMS6H/shirt-award-wga.jpg",
        altText: "Shirt Award WGA",
      },
      {
        url: "https://i.postimg.cc/bwffsTVw/shirt-award-bolton.jpg",
        altText: "Shirt Award - Bolton",
      },
    ],
    bestSeller: false,
  },
  {
    title: "Special Block",
    handle: "special-block",

    price: "25.00",
    description: "",
    externalUrl: "",

    features: [
      "100% Recycled acrylic - shatter proof",
      "20cm tall x 10cm x 2cm",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage: "https://i.postimg.cc/XJ10q6mR/special-block-rylands.jpg",
    images: [
      {
        url: "https://i.postimg.cc/c42SJdgv/special-block-transparent-2.png",
        altText: "Special Block Warrington Wolves",
      },
      {
        url: "https://i.postimg.cc/y8bYy3YL/special-block-transparent2.png",
        altText: "Special Block Rylands F.C",
      },
      {
        url: "https://i.postimg.cc/Gh1NkJky/special-block-transparent.png",
        altText: "Special Block",
      },
      {
        url: "https://i.postimg.cc/x8Qft1wF/gallery-2.jpg",
        altText: "Special Block Rhino Rugby League",
      },
      {
        url: "https://i.postimg.cc/MTpSzpP0/special-block-halton.jpg",
        altText: "Special Block - Halton",
      },
      {
        url: "https://i.postimg.cc/XJ10q6mR/special-block-rylands.jpg",
        altText: "Special Block - Rylands FC",
      },
      {
        url: "https://i.postimg.cc/sgPdShb9/special-block-st-helens.jpg",
        altText: "Special Block St Helens",
      },
      {
        url: "https://i.postimg.cc/CMtgVYjD/special-block-woolston.jpg",
        altText: "Special Block Woolston",
      },
    ],
    bestSeller: true,
  },
  {
    title: "Special Bespoke",
    handle: "special-bespoke",

    price: "POA",
    description: "",
    externalUrl: "",

    features: [
      "100% Recycled acrylic - shatter proof",
      "Choose your colours",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage:
      "https://i.postimg.cc/4N9TfM50/special-award-moorfield-tigers.jpg",

    images: [
      {
        url: "https://i.postimg.cc/L8YfCYdM/bespoke-transparent.png",
        altText: "Bespoke Award",
      },
      {
        url: "https://i.postimg.cc/4N9TfM50/special-award-moorfield-tigers.jpg",
        altText: "Bespoke Award - Moorfield Tigers",
      },
      {
        url: "https://i.postimg.cc/nLZxwkqP/special-award-rabbitons.jpg",
        altText: "Bespoke Award - Rabbitons",
      },
      {
        url: "https://i.postimg.cc/6qDJVL9z/special-award-widnes.jpg",
        altText: "Bespoke Award - Widnes",
      },
    ],
    bestSeller: false,
  },
  {
    title: "Corporate",
    handle: "corporate",

    price: "POA",
    description:
      "Check out some of our available corporate trophies. A full brochure is available below",
    externalUrl: "https://trendsettingtrophies.co.uk/bc/personalised-awards/",

    features: [
      "Huge selection of corporate trophies",
      "A range of materials from metal, glass and crystal",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage: "https://i.postimg.cc/bN3y9833/gallery-9.jpg",
    images: [
      {
        url: "https://i.postimg.cc/bN3y9833/gallery-9.jpg",
        altText: "Corporate Award",
      },
    ],
    bestSeller: false,
  },
  {
    title: "Traditional Awards",
    handle: "traditional-awards",
    price: "POA",
    description:
      "We can also supply traditional awards, a full brochure is available below",
    externalUrl: "https://trendsettingtrophies.co.uk/bc/personalised-awards/",

    features: [
      "Huge selection of sports and activities",
      "A range of materials from metal, glass and crystal",
      "Add your club logo",
      "Add your personalised text",
    ],
    featuredImage:
      "https://i.postimg.cc/1zVRCR8s/traditional-award-transparent2.png",
    images: [
      {
        url: "https://i.postimg.cc/1zVRCR8s/traditional-award-transparent2.png",
        altText: "Traditional Award",
      },
    ],
    bestSeller: false,
  },
];

export default products;
