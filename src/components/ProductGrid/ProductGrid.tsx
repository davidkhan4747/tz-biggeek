import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.scss';

const mockProducts = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max 256GB Natural Titanium',
    price: 159990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    discount: 5,
    rating: 5,
    reviewCount: 128,
    isNew: true,
  },
  {
    id: 2,
    title: 'MacBook Pro 14" M3 Pro 18/36 ядер 18GB/512GB Space Black',
    price: 219990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    rating: 5,
    reviewCount: 64,
    isBestseller: true,
  },
  {
    id: 3,
    title: 'AirPods Pro 2nd Generation with MagSafe Charging Case (USB‑C)',
    price: 24990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    discount: 10,
    rating: 5,
    reviewCount: 256,
    isBestseller: true,
  },
  {
    id: 4,
    title: 'iPad Air 5th Generation 10.9" M1 8/256GB Wi-Fi Space Gray',
    price: 69990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    rating: 4,
    reviewCount: 89,
  },
  {
    id: 5,
    title: 'Apple Watch Series 9 GPS 41mm Starlight Aluminum Case',
    price: 49990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    discount: 7,
    rating: 5,
    reviewCount: 156,
    isNew: true,
  },
  {
    id: 6,
    title: 'Samsung Galaxy S24 Ultra 12/512GB Titanium Gray',
    price: 129990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    rating: 5,
    reviewCount: 42,
    isNew: true,
  },
  {
    id: 7,
    title: 'Apple Vision Pro 256GB',
    price: 359990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    rating: 0,
    reviewCount: 0,
    isNew: true,
  },
  {
    id: 8,
    title: 'Nothing Phone (2) 12/512GB Dark Grey',
    price: 69990,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    discount: 15,
    rating: 4,
    reviewCount: 78,
    isBestseller: true,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          discount={product.discount}
          rating={product.rating}
          reviewCount={product.reviewCount}
          isNew={product.isNew}
          isBestseller={product.isBestseller}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
