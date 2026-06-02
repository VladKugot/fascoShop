import "./Header.scss";

import { NavLink } from "react-router-dom";
import { NavList } from "../NavList/NavList";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    setIsRegistered(!registered);
  }, []);

  return (
    <header className="header">
      <div className="header__img-logo">FASCO</div>

      <NavList />

      {isRegistered ? (
        <div className="header__sign-up">Sign Up</div>
      ) : (
          <ul className="header__block-icon">
            <li className="header__icon">
              <NavLink to="/" className="header__icon--link">1</NavLink>
            </li>
            <li className="header__icon">
              <NavLink to="/" className="header__icon--link">2</NavLink>
            </li>
            <li className="header__icon">
              <NavLink to="/" className="header__icon--link">3</NavLink>
            </li>
            <li className="header__icon">
              <NavLink to="/" className="header__icon--link">4</NavLink>
            </li>
          </ul>
      )}
    </header>
  );
};