import { useState } from "react";
import TopBar from "./components/Top_bar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopBar />
      </div>
    </>
  );
}

export default App;
