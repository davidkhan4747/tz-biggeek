import './Categories.scss';

interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'iPhone',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708',
    link: '/iphone'
  },
  {
    id: 2,
    name: 'MacBook',
    image: 'https://brostore.uz/cdn/shop/files/1_b231c719-3324-4414-abec-84f8472156d2.png?v=1700299204',
    link: '/macbook'
  },
  {
    id: 3,
    name: 'iPad',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066742664',
    link: '/ipad'
  },
  {
    id: 4,
    name: 'Apple Watch',
    image: 'https://cdn.mediapark.uz/imgs/c0da4c43-45e5-4242-bc1b-8d27b7984090_Artboard-1.webp',
    link: '/watch'
  },
  {
    id: 5,
    name: 'AirPods',
    image: 'https://s3p.kattabozor.uz/ri/5cfe2e9784a9ee24edcf380c2f0b59beb30aa5f20839f9e20666ac0cc87edd09_HUqtBX_640l.jpg',
    link: '/airpods'
  },
  {
    id: 6,
    name: 'Аксессуары',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPPX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1661458144539',
    link: '/accessories'
  },
  {
    id: 7,
    name: 'Mac',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684345161143',
    link: '/mac'
  },
  {
    id: 8,
    name: 'Samsung',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1QFKqfgOFdzqRr_zb-XkL4AtQySXGjyiug&s',
    link: '/samsung'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="categories__container">
        <h2 className="categories__title">Популярные категории</h2>
        <div className="categories__grid">
          {categories.map((category: Category) => (
            <a key={category.id} href={category.link} className="category-card">
              <div className="category-card__image">
                <img src={category.image} alt={category.name} />
              </div>
              <span>{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
