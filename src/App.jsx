import './App.css';
import Header from "./components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import CoffeItem from "./components/coffeItem";
import Coffe1 from "./components/img/coffe-1.png";
import CoffeList from "./components/navs/coffeList";
import {useRef} from "react";


const App = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false
  };

  const coffe = {

    img: Coffe1,
    title: "starbucks",
    info: "melhor preço imperdivel",
    desc: ["melhor produto", "zero açucar", "mais proteinas"],
    preco: "8.00"

  }

  function clickCoffeList (v) {

    sliderRef.current.slickGoTo(v);
    
  }

  

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <section className="coffe-section">
            <Slider {...settings} ref={sliderRef}>

              <div >
                <CoffeItem {...coffe} />

              </div>
              <div>

                <CoffeItem {...coffe} />

              </div>
              <div>

                <CoffeItem {...coffe} />


              </div>

            </Slider>

            <div className="coffe-list-container">

               <CoffeList clickEvent={clickCoffeList} evento={(e)=>{alert("clickou no teste")}}></CoffeList>

            </div>

        </section>
      </div>

  
    </div>
  );
}

export default App;
