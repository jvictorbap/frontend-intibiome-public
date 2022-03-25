import Header from './components/Header';
import Banner from './components/Banner';
import bannerUp from './images/banner-intibiome-02@2x.png';
import Section1 from './components/Section1';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner banner={bannerUp} />
      <Section1 />
    </div>
  );
}

export default App;
