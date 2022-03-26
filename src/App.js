import Header from './components/Header';
import BannerUp from './components/BannerUp';
import BannerDown from './components/BannerDown';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Products from './components/Products';
import Discover from './components/Discover';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BannerUp />
      <Section1 />
      <Section2 />
      <Products />
      <BannerDown mt="mt-16" />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
