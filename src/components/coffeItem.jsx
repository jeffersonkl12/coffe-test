import "./coffeItem.scss";
import Title from "./titles/title";
import Button from "./buttons/button";
import {Link} from "react-router-dom";

const CoffeItem = ({ img, classe, title, info, desc, preco }) => {


    return (
        <>
            <div className={`coffe ${classe}`}>
                <div className="coffe-title">

                    <div className="coffe-btn">
                        <Title title={title} info={info} />
                        <Button><Link to="compra" className="btn-link">comprar</Link></Button>
                    </div>


                    <div className="coffe-desc">

                        {desc ? desc.map((v, i) => {

                            return v ? <div><p key={i}>{v}</p> </div> : null

                        }) : null}
                    </div>


                </div>

                <div className="coffe-info">
                    <figure className="coffe-img">
                        <img src={img} />
                    </figure>

                    <p className="coffe-preco">$ {preco}</p>
                </div>





            </div>


            <div className={`coffe ${classe} mobile`}>

                <div className="coffe-title">

                    <Title title={title} info={info} />


                    <div className="coffe-info">
                        <figure className="coffe-img">
                            <img src={img} />
                        </figure>

                        <p className="coffe-preco">$ {preco}</p>
                    </div>


                    <div className="coffe-desc">

                        {desc ? desc.map((v, i) => {

                            return v ? <div key={i} className="desc-item"><p key={i}>{v}</p> </div> : null

                        }) : null}
                    </div>


                    <Button classe="larger"><Link to="compra" className="btn-link">comprar</Link></Button>

                </div>



            </div>

        </>
    )


}

CoffeItem.defaultProps = {


    classe: "medium"


}



export default CoffeItem;