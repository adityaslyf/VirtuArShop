import Carousel from "./components/ carousel";
import Navbar from "./components/Navbar";

import Fwatch from "./components/Fwatch";
import Fglasses from "./components/Fglasses";
import Shoes from "./components/shoes.jsx";
import Table from "./components/table.jsx";
import Iphone from "./components/iphone.jsx";
import Chair from "./components/chair.jsx";
import Top from "./components/top.jsx"
import DeafaultSidebar from "./components/DefaultSidebar.jsx"
import FooterSitemapLinks from "./components/FooterSitemapLinks.jsx"
import CardWithList from "./components/CardWithList.jsx"
import Perfume from "./components/Perfume.jsx"
import Earpods from "./components/Earpods.jsx"

function App() {
  return (
    <>
    
      <Navbar />
  <div className="flex">
    <DeafaultSidebar />
      
      <Top />
      </div>
      <div className="mt-1"> 
      <Carousel />
      </div>
      <div className="flex flex-wrap justify-evenly">
        <Fwatch />
        <Fglasses />
        <Shoes />
        <Table />
        <Iphone />
      </div>
      <div className="flex flex flex-wrap">
      <Chair />
      <Perfume />
      <Earpods />
      </div>
      <CardWithList />
     <FooterSitemapLinks />
    </>
  );
};

export default App;
