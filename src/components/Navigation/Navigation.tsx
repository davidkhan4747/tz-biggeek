import React from 'react';
import './Navigation.scss';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__menu">
          <button className="navigation__all">
            Все товары
            <span className="navigation__arrow" />
          </button>
          <div className="navigation__items">
            <a href="/catalog/skidki" className="navigation__item navigation__item--sale">Скидки</a>
            <a href="/catalog/novinki" className="navigation__item">Новинки</a>
            <a href="/catalog/apple-iphone" className="navigation__item">Apple iPhone</a>
            <a href="/catalog/apple-ipad" className="navigation__item">Apple iPad</a>
            <a href="/catalog/apple-airpods" className="navigation__item">Apple AirPods</a>
            <a href="/catalog/aksessuary" className="navigation__item">Аксессуары</a>
            <a href="/catalog/dlya-doma" className="navigation__item">Для дома</a>
            <a href="/catalog/dyson" className="navigation__item">Dyson</a>
            <a href="/catalog/lego" className="navigation__item">Lego</a>
            <a href="/catalog/nike" className="navigation__item">Nike</a>
            <a href="/blog" className="navigation__item">Блог</a>
            <a href="/video" className="navigation__item">Видео</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
