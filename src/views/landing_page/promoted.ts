import excavator from "../../../public/images/shared/excavator.jpg";
import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  price?: number;
  isNegotiable?: boolean;
  location: string;
  priceOnChat?: boolean;
};

export const promotedProducts: Product[] = [
  {
    id: 1,
    image: excavator,
    title: "Mecalac AX700 Wheel Loader",
    category: "Construction, Backhoe Loader",
    price: 2000,
    isNegotiable: true,
    location: "Lekki, Lagos, Nigeria",
  },
  {
    id: 2,
    image: excavator,
    title: "CAT 420F2 IT Backhoe",
    category: "Heavy Machinery",
    price: 2500,
    isNegotiable: false,
    location: "Ikeja, Lagos, Nigeria",
  },
  {
    id: 3,
    image: excavator,
    title: "Volvo EC210 Excavator",
    category: "Excavators",
    priceOnChat: true,
    location: "Port Harcourt, Rivers, Nigeria",
  },
  {
    id: 4,
    image: excavator,
    title: "Komatsu WA200 Loader",
    category: "Construction Equipment",
    price: 1800,
    isNegotiable: true,
    location: "Abuja, FCT, Nigeria",
  },
  {
    id: 5,
    image: excavator,
    title: "JCB 3CX Backhoe Loader",
    category: "Earthmoving Equipment",
    price: 1950,
    isNegotiable: false,
    location: "Benin City, Edo, Nigeria",
  },
  {
    id: 6,
    image: excavator,
    title: "Liebherr L550 Wheel Loader",
    category: "Loaders",
    price: 2100,
    isNegotiable: true,
    location: "Abeokuta, Ogun, Nigeria",
  },
  {
    id: 7,
    image: excavator,
    title: "Hyundai R210LC Excavator",
    category: "Excavators",
    priceOnChat: true,
    location: "Enugu, Enugu, Nigeria",
  },
  {
    id: 8,
    image: excavator,
    title: "Hitachi ZX200 Excavator",
    category: "Heavy Machinery",
    price: 2400,
    isNegotiable: true,
    location: "Asaba, Delta, Nigeria",
  },
  {
    id: 9,
    image: excavator,
    title: "Case 580N Backhoe Loader",
    category: "Construction, Backhoe Loader",
    price: 1850,
    isNegotiable: false,
    location: "Ilorin, Kwara, Nigeria",
  },
  {
    id: 10,
    image: excavator,
    title: "Bobcat E35 Compact Excavator",
    category: "Compact Equipment",
    price: 1600,
    isNegotiable: true,
    location: "Ibadan, Oyo, Nigeria",
  },
  // {
  //   id: 11,
  //   image: excavator,
  //   title: "Terex TLB890 Backhoe Loader",
  //   category: "Construction Equipment",
  //   priceOnChat: true,
  //   location: "Owerri, Imo, Nigeria",
  // },
  // {
  //   id: 12,
  //   image: excavator,
  //   title: "Doosan DL200 Wheel Loader",
  //   category: "Earthmoving Equipment",
  //   price: 2200,
  //   isNegotiable: false,
  //   location: "Makurdi, Benue, Nigeria",
  // },
  // {
  //   id: 13,
  //   image: excavator,
  //   title: "Kobelco SK210 Excavator",
  //   category: "Excavators",
  //   price: 2750,
  //   isNegotiable: true,
  //   location: "Calabar, Cross River, Nigeria",
  // },
  // {
  //   id: 14,
  //   image: excavator,
  //   title: "Volvo L90H Wheel Loader",
  //   category: "Loaders",
  //   price: 2650,
  //   isNegotiable: false,
  //   location: "Uyo, Akwa Ibom, Nigeria",
  // },
  // {
  //   id: 15,
  //   image: excavator,
  //   title: "JCB JS205 Excavator",
  //   category: "Excavators",
  //   price: 2300,
  //   isNegotiable: true,
  //   location: "Ado Ekiti, Ekiti, Nigeria",
  // },
  // {
  //   id: 16,
  //   image: excavator,
  //   title: "Komatsu PC200 Hydraulic Excavator",
  //   category: "Heavy Equipment",
  //   priceOnChat: true,
  //   location: "Akure, Ondo, Nigeria",
  // },
  // {
  //   id: 17,
  //   image: excavator,
  //   title: "CAT 950GC Wheel Loader",
  //   category: "Construction, Loaders",
  //   price: 2900,
  //   isNegotiable: true,
  //   location: "Kano, Kano, Nigeria",
  // },
  // {
  //   id: 18,
  //   image: excavator,
  //   title: "CASE CX210C Excavator",
  //   category: "Construction Equipment",
  //   price: 2600,
  //   isNegotiable: false,
  //   location: "Kaduna, Kaduna, Nigeria",
  // },
  // {
  //   id: 19,
  //   image: excavator,
  //   title: "Volvo ECR88D Compact Excavator",
  //   category: "Compact Equipment",
  //   price: 1550,
  //   isNegotiable: true,
  //   location: "Jos, Plateau, Nigeria",
  // },
  // {
  //   id: 20,
  //   image: excavator,
  //   title: "LiuGong 856H Wheel Loader",
  //   category: "Earthmoving Equipment",
  //   priceOnChat: true,
  //   location: "Minna, Niger, Nigeria",
  // },
];
