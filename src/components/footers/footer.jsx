import "./footer.scss";
import NavList from "../navs/navList";

const Footer = ({  }) => {


    return (

        <footer className="footer">

            <div>
                <NavList>

                    {["email@gmail.com","(88) 9999-9999-9999","rua santos almeida"]}

                </NavList>
            </div>

            <div>
                <NavList>

                {["loja mais barato","loja maravilhas","best coffe"]}

                </NavList>
            </div>

            <div>
                <NavList>

                {["teste"]}

                </NavList>
            </div>



        </footer>

    )

}

export default Footer;