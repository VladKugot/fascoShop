import './NavList.scss'
import { NavLink } from "react-router-dom";

export const NavList = () => {
  return (
    <ul className='nav'>
      <li className="nav__item">
        <NavLink to={"/"} className="nav__item-link">
          Home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to={"/shopping"} className="nav__item-link">
          Shop
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink to={"/product"} className="nav__item-link">
          Product
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink to={"/"} className="nav__item-link">
          Pages
        </NavLink>
      </li>
    </ul>
  );
};
