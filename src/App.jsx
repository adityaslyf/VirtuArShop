import Carousel from "./components/ carousel";
import Navbar from "./components/Navbar";

import Fwatch from "./components/Fwatch";
import Fglasses from "./components/Fglasses";
import Shoes from "./components/shoes.jsx";
import Table from "./components/table.jsx";
import Iphone from "./components/iphone.jsx";
import Chair from "./components/chair.jsx";
import Top from "./components/top.jsx"
function App() {
  return (
    <>
      <Navbar />
      
      
      <Top />
      <Carousel />
      
      <div className="flex flex-wrap justify-evenly">
        <Fwatch />
        <Fglasses />
        <Shoes />
        <Table />
        <Iphone />
      </div>
      <Chair />
    </>
  );
}

export default App;
