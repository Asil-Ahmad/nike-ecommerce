import image1 from "../images/image.png";
import image2 from "../images/image4.png";
import image3 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
//shoe images
import nikeit42 from "../images/nikeit42.png";
import nikeit43 from "../images/nikeit43.png";
import nikeit44 from "../images/nikeit44.png";
import nikeit45 from "../images/nikeit45.png";
import nikeit46 from "../images/nikeit46.png";
import nikeit47 from "../images/nikeit47.jpg";
import nikeit48 from "../images/nikeit48.png";
import nikeit49 from "../images/nikeit49.png";
import nikeit50 from "../images/nikeit50.png";
import nikeit51 from "../images/nikeit51.png";
//shop by sports
import image30 from "../images/nike-just-do-it30.jpg";
import image31 from "../images/nike-just-do-it35.jpg";
import image32 from "../images/nike-just-do-it36.jpg";
import image33 from "../images/nike-just-do-it37.jpg";
import image34 from "../images/nike-just-do-it39.jpg";
import image35 from "../images/nike-just-do-it40.jpg";
//items
import cargo from "../images/cargo.png";
import shoes1 from "../images/shoes1.png";
import shoes2 from "../images/shoes2.png";
import topwear from "../images/topwear.png";
//menlower
import lowermen1 from "../images/lowermen1.png";
import lowermen2 from "../images/lowermen2.png";
import lowermen3 from "../images/lowermen3.png";
//menshirts
import shirtmen1 from "../images/shirtmen1.png";
//womenshirt
import shirtwomen1 from "../images/shirtwomen1.png";
import shirtwomen2 from "../images/shirtwomen2.png";
import shirtwomen3 from "../images/shirtwomen3.png";
//womenlower
import lowerwomen1 from "../images/lowerwomen1.png";
import lowerwomen2 from "../images/lowerwomen2.png";
import lowerwomen3 from "../images/lowerwomen3.png";
import lowerwomen4 from "../images/lowerwomen4.png";

export {
  image1,
  image2,
  image3,
  nikeit42,
  nikeit43,
  nikeit44,
  nikeit45,
  nikeit46,
  nikeit47,
  nikeit48,
  nikeit49,
  nikeit50,
  nikeit51,
  image7,
};

export const featuredProducts = [
  { imgURL: image1, title: "Nike Jam" },
  { imgURL: image3, title: "Club Third Kits" },
  { imgURL: image2, title: "EasyOn" },
];

export const spotlights = [
  { _id: 1, imgURL: nikeit42 },
  { _id: 2, imgURL: nikeit43 },
  { _id: 3, imgURL: nikeit44 },
  { _id: 4, imgURL: nikeit45 },
  { _id: 5, imgURL: nikeit46 },
  { _id: 6, imgURL: nikeit47 },
  { _id: 7, imgURL: nikeit48 },
  { _id: 8, imgURL: nikeit49 },
  { _id: 9, imgURL: nikeit50 },
  { _id: 10, imgURL: nikeit51 },
];

export const shopbysports = [
  { _id: 4, imgURL: image33, label: "Running" },
  { _id: 6, imgURL: image35, label: "Football" },
  { _id: 2, imgURL: image31, label: "Yoga" },
  { _id: 1, imgURL: image30, label: "Skates" },
  { _id: 3, imgURL: image32, label: "Tennis" },
  { _id: 5, imgURL: image34, label: "Gym" },
];

export const latest = [
  { _id: 1, imgURL: cargo, category: "Men Shorts", name: "Nike Shorts" },
  { _id: 2, imgURL: topwear, category: "Men Shirts", name: "T-Shirts" },
  { _id: 3, imgURL: shoes1, category: "Men Shoes", name: "Jordan " },
  { _id: 4, imgURL: shoes2, category: "Men Shoes", name: "Air Force 1" },
];

export const products = [
  {
    _id: 1,
    name: "Nike Air Max 270",
    description: "Lightweight running shoes with Air Max cushioning.",
    price: 150,
    image: [nikeit42],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10", "11"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: 2,
    name: "Nike Revolution 5",
    description: "Breathable and supportive running shoes for daily training.",
    price: 120,
    image: [nikeit45],
    category: "Women",
    subCategory: "Shoes",
    sizes: ["6", "7", "8", "9"],
    date: 1716634345449,
    bestseller: false,
  },
  {
    _id: 3,
    name: "Nike Dri-FIT T-Shirt",
    description: "Moisture-wicking T-shirt for intense workouts.",
    price: 45,
    image: [topwear],
    category: "Men",
    subCategory: "T-shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345450,
    bestseller: true,
    bestsellerinmen: true,
  },
  {
    _id: 4,
    name: "Nike Sportswear Essential Tee",
    description: "Soft cotton T-shirt for all-day comfort.",
    price: 40,
    image: [shirtwomen1],
    category: "Women",
    subCategory: "T-shirt",
    sizes: ["S", "M", "L"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    _id: 5,
    name: "Nike Air Zoom Pegasus 38",
    description: "Responsive cushioning and breathable support.",
    price: 130,
    image: [nikeit43],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10", "11"],
    date: 1716634345452,
    bestseller: true,
  },
  {
    _id: 6,
    name: "Nike Legend Essential 2",
    description: "Versatile training shoes with durable design.",
    price: 90,
    image: [nikeit44],
    category: "Women",
    subCategory: "Shoes",
    sizes: ["6", "7", "8"],
    date: 1716634345453,
    bestseller: false,
  },
  {
    _id: 7,
    name: "Nike Pro Men's Tight",
    description: "Compression lower for maximum performance.",
    price: 60,
    image: [lowermen1],
    category: "Men",
    subCategory: "Lower",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345454,
    bestseller: false,
  },
  {
    _id: 8,
    name: "Nike Yoga Luxe Tights",
    description: "High-waisted yoga lower for women.",
    price: 80,
    image: [lowerwomen1],
    category: "Women",
    subCategory: "Lower",
    sizes: ["XS", "S", "M", "L"],
    date: 1716634345455,
    bestseller: true,
  },
  {
    _id: 9,
    name: "Nike Dri-FIT Academy Pants",
    description: "Slim-fit pants with sweat-wicking technology.",
    price: 50,
    image: [lowermen2],
    category: "Men",
    subCategory: "Lower",
    sizes: ["S", "M", "L"],
    date: 1716634345456,
    bestseller: false,
  },
  {
    _id: 10,
    name: "Nike Pro Women's Crop Tights",
    description: "Breathable cropped tights for workouts.",
    price: 65,
    image: [lowerwomen2],
    category: "Women",
    subCategory: "Lower",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345457,
    bestseller: true,
  },
  {
    _id: 11,
    name: "Nike Flex 2021 RN Shoes",
    description: "Flexible running shoes with optimal cushioning.",
    price: 110,
    image: [nikeit46],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10", "11"],
    date: 1716634345458,
    bestseller: false,
  },
  {
    _id: 12,
    name: "Nike Sportswear Club Fleece",
    description: "Classic fleece lower for everyday wear.",
    price: 55,
    image: [lowermen3],
    category: "Men",
    subCategory: "Lower",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345459,
    bestseller: true,
  },
  {
    _id: 13,
    name: "Nike Air Force 1 '07",
    description: "Iconic basketball shoes with Air cushioning.",
    price: 130,
    image: [nikeit47],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10", "11"],
    date: 1716634345460,
    bestseller: true,
  },
  {
    _id: 14,
    name: "Nike Phantom GT2",
    description: "Precision football boots for control and speed.",
    price: 140,
    image: [nikeit48],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10"],
    date: 1716634345461,
    bestseller: false,
  },
  {
    _id: 15,
    name: "Nike Sportswear Tech Fleece Joggers",
    description: "Warm joggers with a sleek design.",
    price: 100,
    image: [lowerwomen3],
    category: "Women",
    subCategory: "Lower",
    sizes: ["S", "M", "L"],
    date: 1716634345462,
    bestseller: true,
  },
  {
    _id: 16,
    name: "Nike Downshifter 11",
    description: "Versatile shoes for training and running.",
    price: 75,
    image: [nikeit49],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["8", "9", "10"],
    date: 1716634345463,
    bestseller: true,
  },
  {
    _id: 17,
    name: "Nike Air Zoom Structure 23",
    description: "Stable running shoes for long-distance support.",
    price: 160,
    image: [nikeit50],
    category: "Women",
    subCategory: "Shoes",
    sizes: ["6", "7", "8", "9"],
    date: 1716634345464,
    bestseller: false,
  },
  {
    _id: 18,
    name: "Nike Pro Dri-FIT Shorts",
    description: "Breathable, moisture-wicking shorts for intense training.",
    price: 35,
    image: [cargo],
    category: "Men",
    subCategory: "Lower",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345465,
    bestseller: false,
    bestsellerinmen: true,
  },
  {
    _id: 19,
    name: "Nike Women's Running Shorts",
    description: "Comfortable shorts for running and casual wear.",
    price: 45,
    image: [lowerwomen4],
    category: "Women",
    subCategory: "Lower",
    sizes: ["XS", "S", "M", "L"],
    date: 1716634345466,
    bestseller: true,
  },
  {
    _id: 20,
    name: "Nike Court Legacy Canvas",
    description: "Classic sneakers for casual wear.",
    price: 85,
    image: [nikeit51],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["7", "8", "9", "10"],
    date: 1716634345467,
    bestseller: true,
  },
  {
    _id: 21,
    name: "Nike Free Metcon 4",
    description: "Training shoes for flexibility and stability.",
    price: 120,
    image: [nikeit44],
    category: "Women",
    subCategory: "Shoes",
    sizes: ["6", "7", "8", "9"],
    date: 1716634345468,
    bestseller: true,
  },
  {
    _id: 22,
    name: "Nike Air Force 1 Shadow",
    description: "A playful, elevated take on the classic AF1.",
    price: 140,
    image: [nikeit46],
    category: "Women",
    subCategory: "Shoes",
    sizes: ["6", "7", "8"],
    date: 1716634345469,
    bestseller: false,
  },
  {
    _id: 23,
    name: "Nike Sportswear Icon Clash T-shirt",
    description: "Stylish and comfortable graphic T-shirt.",
    price: 50,
    image: [shirtwomen2],
    category: "Women",
    subCategory: "T-shirt",
    sizes: ["XS", "S", "M"],
    date: 1716634345470,
    bestseller: true,
  },
  {
    _id: 24,
    name: "Nike Therma-FIT Hoodie",
    description: "Warm hoodie with thermal fabric.",
    price: 80,
    image: [shirtmen1],
    category: "Men",
    subCategory: "T-shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345471,
    bestseller: true,
  },
  {
    _id: 25,
    name: "Nike Victory Compression Bra",
    description: "Supportive sports bra for high-impact activities.",
    price: 50,
    image: [shirtwomen3],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345472,
    bestseller: false,
  },
  {
    _id: 26,
    name: "Nike Jordan",
    description: "Supportive sports shoes for high-impact activities.",
    price: 50,
    image: [shoes1],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["7", "8", "9", "10"],
    date: 1716634345467,
    bestseller: true,
    bestsellerinmen: true,
  },
  {
    _id: 27,
    name: "Nike Airforce 1",
    description: "Traning high-impact activities.",
    price: 50,
    image: [shoes2],
    category: "Men",
    subCategory: "Shoes",
    sizes: ["7", "8", "9", "10"],
    date: 1716634345467,
    bestseller: true,
    bestsellerinmen: true,
  },
  // Continue adding until 50...
];
