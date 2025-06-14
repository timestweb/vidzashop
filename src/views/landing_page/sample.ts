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

export const products: Product[] = [
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
];
