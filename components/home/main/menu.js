import styles from './styles.module.scss';
import { menuArray } from '../../../data/home';
import Link from 'next/link';
import {
  GiLargeDress,
  GiClothes,
  Gi3DHammer,
  GiWatch,
  GiBallerinaShoes,
  GiHeadphones,
  GiHealthCapsule,
  GiSportMedal,
  GiBigDiamondRing,
} from 'react-icons/gi';
import { MdOutlineSportsEsports, MdOutlineSmartToy } from 'react-icons/md';
import { BiCameraMovie, BiGift, BiCategory } from 'react-icons/bi';
import { FaBaby } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { BsPhoneVibrate } from 'react-icons/bs';
export default function Menu() {
  return (
    <ul className={styles.menu}>
      <li>
        <a className={styles.menu__header}>
          <BiCategory />
          <b>Categories</b>
        </a>
      </li>
      <div className={styles.menu__list}>
        {menuArray.map((item, i) => (
          <Link href={item.link} key={item.name}>
            <a>
              <span>{item.name}</span>
            </a>
          </Link>
        ))}
      </div>
    </ul>
  );
}
// name: "Women's  Fashion",
//     link: '',
//     subMenu: [
//       {
//         name: '',
//         link: '',
//       },
//     ],
//     brands: [],
//     images: [],
