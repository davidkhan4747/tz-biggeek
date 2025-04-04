import React from 'react';
import { FaTelegramPlane, FaVk, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column">
            <h3 className="footer__title">Информация</h3>
            <ul className="footer__list">
              <li><a href="/delivery">Доставка</a></li>
              <li><a href="/payment">Оплата</a></li>
              <li><a href="/warranty">Гарантия</a></li>
              <li><a href="/trade-in">Trade-In</a></li>
              <li><a href="/for-business">Для СМИ и блогеров</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>
          
          <div className="footer__column">
            <h3 className="footer__title">О компании</h3>
            <ul className="footer__list">
              <li><a href="/about">О нас</a></li>
              <li><a href="/reviews">Отзывы</a></li>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/video">Видео</a></li>
              <li><a href="/careers">Вакансии</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Каталог</h3>
            <ul className="footer__list">
              <li><a href="/catalog/apple-iphone">Apple iPhone</a></li>
              <li><a href="/catalog/apple-ipad">Apple iPad</a></li>
              <li><a href="/catalog/apple-watch">Apple Watch</a></li>
              <li><a href="/catalog/apple-airpods">Apple AirPods</a></li>
              <li><a href="/catalog/accessories">Аксессуары</a></li>
            </ul>
          </div>

          <div className="footer__column footer__column--contacts">
            <h3 className="footer__title">Контакты</h3>
            <div className="footer__contacts">
              <a href="tel:+74951991429" className="footer__phone">+7 (495) 199-14-29</a>
              <p className="footer__schedule">Пн-Вс 10:00 - 22:00</p>
              <div className="footer__social">
                <a href="https://t.me/biggeek" className="footer__social-link">
                  <FaTelegramPlane />
                </a>
                <a href="https://vk.com/biggeek" className="footer__social-link">
                  <FaVk />
                </a>
                <a href="https://instagram.com/biggeek" className="footer__social-link">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/biggeek" className="footer__social-link">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            © 2024 BigGeek. Все права защищены.
          </div>
          <div className="footer__links">
            <a href="/privacy">Политика конфиденциальности</a>
            <a href="/terms">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
