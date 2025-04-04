import React from 'react';
import './Banner.scss';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h1 className="banner__title">
            Apple iPhone<br />
            16 Pro и Pro Max
          </h1>
          <a href="/catalog/iphone-16-pro" className="banner__button">
            Смотреть
          </a>
        </div>
        <div className="banner__image">
          <img 
            src="https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg"           alt="iPhone 16 Pro"
          />
        </div>
      </div>
      <div className="banner__categories">
        <div className="banner__categories-container">
          <a href="/catalog/iphone-16-pro" className="banner__category">iPhone 16 Pro</a>
          <a href="/catalog/iphone-16" className="banner__category">iPhone 16</a>
          <a href="/catalog/samsung" className="banner__category">Samsung</a>
          <a href="/catalog/watch" className="banner__category">Watch</a>
          <a href="/catalog/airpods-4" className="banner__category">AirPods 4</a>
          <a href="/catalog/iphone-15-pro" className="banner__category">iPhone 15 Pro</a>
          <a href="/catalog/iphone-15" className="banner__category">iPhone 15</a>
          <a href="/catalog/xiaomi" className="banner__category">Xiaomi</a>
          <a href="/catalog/accessories" className="banner__category">Кроссовки</a>
          <a href="/catalog/airpods-pro" className="banner__category">AirPods Pro</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
