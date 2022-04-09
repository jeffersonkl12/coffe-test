import './App.css';
import Header from "./components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import CoffeItem from "./components/coffeItem";
import Coffe1 from "./components/img/coffe-1.png";
import Footer from "./components/footers/footer";

const App = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,

  
  };

  const coffe = {

    img: Coffe1,
    title: "starbucks",
    info: "melhor preço imperdivel",
    desc: ["melhor produto", "zero açucar", "mais proteinas"],
    preco: "8.00"

  }

  const lista = ["teste", "teste", "teste"];

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <section className="coffe-section">
            <Slider {...settings}>

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

        </section>
      </div>

      <Footer lista={lista}></Footer>


    </div>
  );
}

export default App;
