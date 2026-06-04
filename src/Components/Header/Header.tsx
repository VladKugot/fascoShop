import "./Header.scss";

import { NavLink } from "react-router-dom";
import { NavList } from "../NavList/NavList";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    setIsRegistered(!registered);
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 639) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__img-logo">FASCO</div>
      {isMenuOpen ? (
        <button
          className="header__menu-icon"
          aria-label="Open menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="3"
              y="11"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="3"
              y="17"
              width="18"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        </button>
      ) : (
        <>
          <NavList registered={isRegistered} />
          {!isRegistered ? (
            <div className="header__sign-up">Sign Up</div>
          ) : (
            <ul className="header__block-icon">
              <li className="header__icon">
                <NavLink
                  to="/"
                  className="header__icon--link header__icon--link-search"
                ></NavLink>
              </li>
              <li className="header__icon">
                <NavLink
                  to="/"
                  className="header__icon--link header__icon--link-profile"
                ></NavLink>
              </li>
              <li className="header__icon">
                <NavLink
                  to="/"
                  className="header__icon--link header__icon--link-favorite"
                ></NavLink>
              </li>
              <li className="header__icon">
                <NavLink
                  to="/"
                  className="header__icon--link header__icon--link-cart"
                ></NavLink>
              </li>
            </ul>
          )}
        </>
      )}
      {isDrawerOpen && (
        <>
          <div
            className="header__drawer-backdrop"
            onClick={() => setIsDrawerOpen(false)}
          />
          <aside className="header__drawer" role="dialog" aria-modal="true">
            <button
              className="header__drawer-close"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close menu"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <NavList registered={isRegistered} />

            {!isRegistered ? (
              <div className="header__sign-up">Sign Up</div>
            ) : (
              <ul className="header__block-icon">
                <li className="header__icon">
                  <NavLink
                    to="/"
                    className="header__icon--link header__icon--link-search"
                  ></NavLink>
                </li>
                <li className="header__icon">
                  <NavLink
                    to="/"
                    className="header__icon--link header__icon--link-profile"
                  ></NavLink>
                </li>
                <li className="header__icon">
                  <NavLink
                    to="/"
                    className="header__icon--link header__icon--link-favorite"
                  ></NavLink>
                </li>
                <li className="header__icon">
                  <NavLink
                    to="/"
                    className="header__icon--link header__icon--link-cart"
                  ></NavLink>
                </li>
              </ul>
            )}
          </aside>
        </>
      )}
    </header>
  );
};
