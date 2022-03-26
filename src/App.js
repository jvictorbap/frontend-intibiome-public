import Header from './components/Header';
import Banner from './components/Banner';
import bannerUp from './images/banner-intibiome-02@2x.png';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner banner={bannerUp} />
      <Section1 />
      <Section2 />
      <Products />
    </div>
  );
}

export default App;
