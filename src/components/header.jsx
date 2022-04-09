import Logo from "./img/logo.png";
import "./header.scss";
import Input from "./inputs/input";
import { BsSearch } from "react-icons/bs";
import Nav from "./navs/nav";

const Header = () => {


    return (

        <header className="header">

            <div className="header-container">

                <div className="header-logo">
                  
                    <figure>
                        <img src={Logo} />
                    </figure>

                </div>

             
                        <Nav>{["home","produtos","mais","suporte"]}</Nav>

                    <Input placeholder="procure por algo" icon={<BsSearch/>}/>
              
            </div>


        </header>
    )

}

export default Header;