import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlights from './components/Highlights';
import Location from './components/Location';

function App() {
  return (
    <div className='App'>
      <Header />

      <Featured></Featured>

      <VenueInfo></VenueInfo>

      <Highlights></Highlights>
      <Location></Location>
      <Footer></Footer>
    </div>
  );
}

export default App;
