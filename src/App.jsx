import { useState } from "react";
import TopBar from "./components/Top_bar";
import Header from "./components/Header";
import HeaderSlider from "./components/Header_slider";
import Category from "./components/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopBar />
        <Header />
        <HeaderSlider />
        <Category />
      </div>
    </>
  );
}

export default App;
