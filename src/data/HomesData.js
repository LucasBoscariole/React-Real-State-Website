import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/image3.jpg';
import Image4 from '../images/image4.jpg';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image11 from '../images/image11.jpg';
import Image12 from '../images/image12.jpg';
import Image13 from '../images/image13.jpg';
import Image14 from '../images/image14.jpg';
import Image15 from '../images/image15.jpg';
import Image16 from '../images/image16.jpg';
import Image17 from '../images/image17.jpg';
import Image18 from '../images/image18.jpg';
import Image19 from '../images/image19.jpg';
import Image20 from '../images/image20.jpg';
import Image21 from '../images/image21.jpg';
import Image22 from '../images/image22.jpg';
import Image23 from '../images/image23.jpg';
import Image24 from '../images/image24.jpg';
import Image25 from '../images/image25.jpg';
import Image26 from '../images/image26.jpg';
import Image27 from '../images/image27.jpg';

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return [...new Set(unique)];
};

export const homesDataObject = [
  {
    title: 'Bali, Indonesia',
    price: 4200000,
    rentalPrice: 20000,
    locality: 'Indonesia',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image1,
    id: '1',
    images: [
      { img: Image1 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Paris, France',
    price: 2700000,
    rentalPrice: 50000,
    locality: 'France',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos. ',
    img: Image2,
    id: '2',
    images: [
      { img: Image2 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'São Paulo, Brazil',
    price: 1700000,
    rentalPrice: 10000,
    locality: 'Brazil',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image3,
    id: '3',
    images: [
      { img: Image3 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'California, USA',
    price: 8000000,
    rentalPrice: 50000,
    locality: 'USA',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image4,
    id: '4',
    images: [
      { img: Image4 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Miami, USA',
    price: 4500000,
    rentalPrice: 22000,
    locality: 'USA',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image5,
    id: '5',
    images: [
      { img: Image5 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'California, USA',
    price: 1299000,
    rentalPrice: 25000,
    locality: 'USA',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image6,
    id: '6',
    images: [
      { img: Image6 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'San Antonio, USA',
    price: 11020000,
    rentalPrice: 27000,
    locality: 'USA',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image7,
    id: '7',
    images: [
      { img: Image7 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Tokyo, Japan',
    price: 3800000,
    rentalPrice: 14000,
    locality: 'Japan',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image11,
    id: '8',
    images: [
      { img: Image11 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Paraná, Brazil',
    price: 6450000,
    rentalPrice: 5000,
    locality: 'Brazil',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image12,
    id: '9',
    images: [
      { img: Image12 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Lisbon, Portugal',
    price: 4120000,
    rentalPrice: 30000,
    locality: 'Portugal',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image13,
    id: '10',
    images: [
      { img: Image13 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Venice, Italy',
    price: 6250000,
    rentalPrice: 28000,
    locality: 'Italy',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image14,
    id: '11',
    images: [
      { img: Image14 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Berlim, German',
    price: 10000000,
    rentalPrice: 70000,
    locality: 'German',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image15,
    id: '12',
    images: [
      { img: Image15 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Rome, Italy',
    price: 1520000,
    rentalPrice: 10000,
    locality: 'Italy',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image16,
    id: '13',
    images: [
      { img: Image16 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Prague, Portugal',
    price: 10150000,
    rentalPrice: 85000,
    locality: 'Portugal',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image17,
    id: '14',
    images: [
      { img: Image17 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'New York, USA',
    price: 2500000,
    rentalPrice: 42000,
    locality: 'USA',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image18,
    id: '15',
    images: [
      { img: Image18 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Florence, Italy',
    price: 4000000,
    rentalPrice: 30000,
    locality: 'Italy',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image19,
    id: '16',
    images: [
      { img: Image19 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Surabaya, Insonesia',
    price: 7500000,
    rentalPrice: 70000,
    locality: 'Indonesia',
    rental: false,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image20,
    id: '17',
    images: [
      { img: Image20 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Braganca, Portugal',
    price: 10599000,
    rentalPrice: 90000,
    locality: 'Portugal',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image21,
    id: '18',
    images: [
      { img: Image21 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Lyon, France',
    price: 2000000,
    rentalPrice: 12000,
    locality: 'France',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image22,
    id: '19',
    images: [
      { img: Image22 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
  {
    title: 'Osaka, Japan',
    price: 4689000,
    rentalPrice: 11000,
    locality: 'Japan',
    rental: true,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat voluptates cumque nulla, excepturi nihil ab dolor animi cupiditate maxime labore deleniti sapiente ipsam eius distinctio, libero eligendi doloribus eos.',
    img: Image23,
    id: '20',
    images: [
      { img: Image23 },
      { img: Image24 },
      { img: Image25 },
      { img: Image26 },
      { img: Image27 },
    ],
  },
];

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};
