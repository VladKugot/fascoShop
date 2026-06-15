import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__img-logo">FASCO</div>

          <ul className="footer__nav">
            <li className="footer__item nav__item-link">Support Center</li>
            <li className="footer__item nav__item-link">Invaicing</li>
            <li className="footer__item nav__item-link">Contract</li>
            <li className="footer__item nav__item-link">Careers</li>
            <li className="footer__item nav__item-link">Blog</li>
            <li className="footer__item nav__item-link">FAQ,s</li>
          </ul>
        </div>
        <p className="footer__copyright">
          Copyright © 2026 Xpro . All Rights Reseved.
        </p>
      </div>
    </footer>
  );
};
