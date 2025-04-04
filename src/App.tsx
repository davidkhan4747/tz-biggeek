import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Banner from './components/Banner/Banner'
import Categories from './components/Categories/Categories'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main">
        <Banner />
        <Categories />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
