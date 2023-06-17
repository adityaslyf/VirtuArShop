import Carousel from "./components/ carousel";
import Navbar from "./components/Navbar";

import Fwatch from "./components/Fwatch";
import Fglasses from "./components/Fglasses";
import Shoes from "./components/shoes.jsx";
import Table from "./components/table.jsx";
import Iphone from "./components/iphone.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Carousel />
      <div className="flex flex-wrap">
      <Fwatch />
 <Fglasses />
 <Shoes />
 <Table />
 <Iphone />
      </div>
    </>
  );
};

export default App;
