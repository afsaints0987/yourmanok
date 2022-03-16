import React from 'react';
import './Styles/styles.css'
import Hero from './component/Hero/Hero';
import Footer from './component/Footer/Footer';
import Products from './component/Products/Products';
import Location from './component/Location/Location';


function App() {
  return (
    <div className="App">
      <Hero />
      <Products />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
