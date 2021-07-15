import { IoCalendar } from 'react-icons/io5';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { BsFillHouseFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdPinDrop, MdPool } from 'react-icons/md';
import Image5 from '../images/image5.jpg';
import Image6 from '../images/image6.jpg';
import Image7 from '../images/image7.jpg';
import Image8 from '../images/image8.jpg';
import Image9 from '../images/image9.jpg';
import Image10 from '../images/image10.jpg';

export const infoIconsData = [
  { title: 'Low Commission', icon: <FaMoneyBillAlt /> },
  { title: 'Flexible Rental Dates', icon: <IoCalendar /> },
  { title: 'Space & Privacy', icon: <BsFillEyeSlashFill /> },
  { title: 'More than 600 Houses', icon: <BsFillHouseFill /> },
];

export const aboutIcons = [
  { title: 'Low Commission', icon: <FaMoneyBillAlt /> },
  { title: 'Flexible Rental Dates', icon: <IoCalendar /> },
  { title: 'Space & Privacy', icon: <BsFillEyeSlashFill /> },
  { title: 'More than 600 Houses', icon: <BsFillHouseFill /> },
  { title: 'Great Locations', icon: <MdPinDrop /> },
  { title: 'Awesomes Leisure Areas', icon: <MdPool /> },
];

export const NewHouses = [
  {
    title: 'Miami, USA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel odio, accusamus saepe ea eligendi.',
    img: Image5,
    id: '5',
  },
  {
    title: 'California, USA',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel odio, accusamus saepe ea eligendi.',
    img: Image6,
    id: '6',
  },
  {
    title: 'San Antonio, USA',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla itaque amet fugiat, culpa aperiam consectetur.',
    img: Image7,
    id: '7',
  },
];
export const interiorDesign = {
  title: 'Beautiful Interiors',
  img: Image8,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quam vitae facilis sequi porro, ratione soluta illum laborum inventore at voluptate suscipit sed doloremque repellat minus qui enim necessitatibus quos!',
  path: '/properties',
};

export const leisureData = {
  title: 'Leisure Behind Your Door',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eveniet ratione sequi atque. Illo, ab corporis repellendus porro veniam quidem.',
  img1: Image9,
  img2: Image10,
  path: '/properties',
};
