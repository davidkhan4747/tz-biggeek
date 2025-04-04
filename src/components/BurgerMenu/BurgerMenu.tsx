import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import './BurgerMenu.scss';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <button className="burger-button" onClick={toggleMenu}>
        {isOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
      </button>

      <div className={`burger-menu ${isOpen ? 'burger-menu--open' : ''}`}>
        <div className="burger-menu__container">
          <nav className="burger-menu__nav">
            <div className="burger-menu__section">
              <h3 className="burger-menu__title">Каталог</h3>
              <div className="burger-menu__links">
                <a href="/catalog/skidki" className="burger-menu__link burger-menu__link--sale">Скидки</a>
                <a href="/catalog/novinki" className="burger-menu__link">Новинки</a>
                <a href="/catalog/apple-iphone" className="burger-menu__link">Apple iPhone</a>
                <a href="/catalog/apple-ipad" className="burger-menu__link">Apple iPad</a>
                <a href="/catalog/apple-airpods" className="burger-menu__link">Apple AirPods</a>
                <a href="/catalog/aksessuary" className="burger-menu__link">Аксессуары</a>
                <a href="/catalog/dlya-doma" className="burger-menu__link">Для дома</a>
              </div>
            </div>

            <div className="burger-menu__section">
              <h3 className="burger-menu__title">Информация</h3>
              <div className="burger-menu__links">
                <a href="/delivery" className="burger-menu__link">Доставка</a>
                <a href="/payment" className="burger-menu__link">Оплата</a>
                <a href="/blog" className="burger-menu__link">Блог</a>
                <a href="/about" className="burger-menu__link">О компании</a>
                <a href="/contacts" className="burger-menu__link">Контакты</a>
              </div>
            </div>

            <div className="burger-menu__section">
              <h3 className="burger-menu__title">Контакты</h3>
              <a href="tel:+74951991429" className="burger-menu__phone">
                +7 (495) 199-14-29
              </a>
              <p className="burger-menu__schedule">
                Пн-Вс 10:00 - 22:00
              </p>
            </div>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="burger-menu__overlay" onClick={toggleMenu} />
      )}
    </>
  );
};

export default BurgerMenu;
