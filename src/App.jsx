import { useState } from "react";
import TopBar from "./components/Top_bar";
import Header from "./components/Header";
import HeaderSlider from "./components/Header_slider";
import Category from "./components/Category";
import WhatWeOffer from "./components/What_we_offer";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopBar />
        <Header />
        <HeaderSlider />
        <Category />
        <WhatWeOffer />
        <Footer />
      </div>
    </>
  );
}

export default App;
