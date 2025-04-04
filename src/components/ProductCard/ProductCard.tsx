import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import './ProductCard.scss';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  discount,
  rating = 5,
  reviewCount = 0,
  isNew = false,
  isBestseller = false,
}) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="product-card">
      <div className="product-card__badges">
        {isNew && <span className="product-card__badge product-card__badge--new">New</span>}
        {isBestseller && (
          <span className="product-card__badge product-card__badge--bestseller">Хит</span>
        )}
        {discount && (
          <span className="product-card__badge product-card__badge--discount">-{discount}%</span>
        )}
      </div>
      <a href="#" className="product-card__link">
        <div className="product-card__image">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="product-card__content">
          <div className="product-card__rating">
            <div className="product-card__stars">
              {[...Array(5)].map((_, index) => (
                index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
              ))}
            </div>
            {reviewCount > 0 && (
              <span className="product-card__reviews">{reviewCount} отзывов</span>
            )}
          </div>
          <h3 className="product-card__title">{title}</h3>
          <div className="product-card__price">
            <span className="product-card__current-price">
              {discountedPrice.toLocaleString()} ₽
            </span>
            {discount && (
              <span className="product-card__original-price">
                {price.toLocaleString()} ₽
              </span>
            )}
          </div>
          <div className="product-card__footer">

            <button className="product-card__button">
              <BsCart3 />
              <span>В корзину</span>
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
