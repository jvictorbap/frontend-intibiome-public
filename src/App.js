import Header from './components/Header';
import Banner from './components/Banner';
import bannerUp from './images/banner-intibiome-02@2x.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner banner={bannerUp} />
    </div>
  );
}

export default App;
