import React from 'react';
import { IoLocationOutline, IoSearchOutline } from 'react-icons/io5';
import { BiPhone } from 'react-icons/bi';
import { TbArrowsShuffle } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container">
          <div className="header__city">
            <IoLocationOutline />
            <span>Москва</span>
          </div>
          <nav className="header__top-nav">
            <ul>
              <li><a href="/delivery">Доставка</a></li>
              <li><a href="/payment">Оплата</a></li>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/about">О компании</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </nav>
          <div className="header__contacts">
            <BiPhone />
            <a href="tel:+74951991429">+7 (495) 199-14-29</a>
          </div>
        </div>
      </div>
      <div className="header__main">
        <div className="header__container">
          <div className="header__logo">
            <a href="/" className="header__logo-link">
              <img src={logo} alt="BigGeek" width="228" height="40" />
            </a>
          </div>
          <BurgerMenu />
          <div className="header__search">
            <input type="text" placeholder="Поиск по товарам" />
            <button type="submit">
              <IoSearchOutline />
              <span>Найти</span>
            </button>
          </div>
          <div className="header__actions">
            <a href="/compare" className="header__action">
              <TbArrowsShuffle className="header__action-icon" />
              <span>Сравнение</span>
            </a>
            <a href="/favorites" className="header__action">
              <AiOutlineHeart className="header__action-icon" />
              <span>Избранное</span>
            </a>
            <a href="/cart" className="header__action header__cart">
              <BsCart3 className="header__action-icon" />
              <span>Корзина</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
