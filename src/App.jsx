import './App.scss';
import Header from "./components/header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import CoffeItem from "./components/coffeItem";
import Coffe1 from "./components/img/coffe-1.png";
import CoffeList from "./components/navs/coffeList";
import { useRef, useState, useEffect } from "react";


const App = () => {

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const ativado = useRef(null);


  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    arrows: false,
    dots: false,

  };

  const coffe = {

    img: Coffe1,
    title: "starbucks",
    info: "melhor preço imperdivel",
    desc: ["melhor produto", "zero açucar", "mais proteinas"],
    preco: "8.00"

  }

  const clickCoffeList = (e) => {
    console.log(e.target);
    if (ativado.current.contains(e.target) && e.target.tagName.toLowerCase() === "img") {

      ativado.current.querySelectorAll(".slider-coffe").forEach((v, i) => {

        v.classList.remove("ativado");

        if (v.contains(e.target)) {
          v.classList.toggle("ativado");
        }

      });

    }

  }

  const changeListCoffe = (index) => {


    ativado.current.querySelectorAll(".slider-coffe").forEach((v, i) => {

      v.classList.remove("ativado");
      if (i === index) {

        v.classList.toggle("ativado");
      }

    });


  }



  useEffect(() => {

    setSlider1(sliderRef1.current);
    setSlider2(sliderRef2.current);
  }, []);


  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <section className="coffe-section">
          <Slider {...settings}
            ref={sliderRef1}
            asNavFor={slider2}
            beforeChange={(i,i2) => { changeListCoffe(i2)}}
            className="slider-coffe">

            <div className="slider-coffe-item">
              <CoffeItem {...coffe} />

            </div>
            <div className="slider-coffe-item">

              <CoffeItem {...coffe} />

            </div>
            <div className="slider-coffe-item">

              <CoffeItem {...coffe} />

            </div >

          </Slider>

          <div className="coffe-list-container" onClick={clickCoffeList} ref={ativado}>

            <Slider
              className="slider-navbar"
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              ref={sliderRef2}
              asNavFor={slider1}

            >
              <div>
                <figure className="slider-coffe ativado" ><img src={Coffe1} /></figure>
              </div>
              <div>
                <figure className="slider-coffe" ><img src={Coffe1} /></figure>
              </div>
              <div>
                <figure className="slider-coffe" ><img src={Coffe1} /></figure>
              </div>

            </Slider>
          </div>

        </section>
      </div>


    </div>
  );
}

export default App;
