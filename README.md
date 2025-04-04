# BigGeek Clone

Клон главной страницы и улучшение интернет-магазина BigGeek.ru, разработанный с использованием React, TypeScript и SCSS.

## Технологии

- React
- SCSS
- Vite

## Требования

- Node.js версии 16 или выше
- npm или yarn

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/davidkhan4747/tz-biggeek.git
cd tz-biggeek
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
```

## Запуск приложения

1. Запуск в режиме разработки:
```bash
npm run dev
# или
yarn dev
```
Приложение будет доступно по адресу: http://localhost:5173

2. Сборка для продакшена:
```bash
npm run build
# или
yarn build
```

## Функциональность

- Просмотр категорий товаров
- Карточки товаров с информацией о цене, скидках и рейтинге
- Адаптивный дизайн для мобильных устройств
- Корзина покупок

## Структура проекта

```
src/
├── assets/         # Изображения и статические файлы
├── components/     # React компоненты
├── styles/         # Глобальные стили
└── App.tsx         # Главный компонент приложения
```

## Автор

DavidKhan - [GitHub](https://github.com/davidkhan4747)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
