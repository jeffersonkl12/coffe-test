import "./nav.scss";
import { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom"; 

const Nav = () => {

    const aux = useRef(null);
    const [classe,setClasse] = useState("");

    const clickTest = (e) =>{
        if(aux.current != null && !aux.current.contains(e.target) && classe === "ativado"){
            setClasse("");
        }
    }

    useEffect(()=>{

        document.addEventListener("click",clickTest);
        return ()=>{
            document.removeEventListener("click",clickTest);
        }
    },[classe]);

   const clickMenu = (e) =>{
        setClasse(classe == ""? "ativado": "");
       

    }

    return(

        <nav className= "nav" ref={aux}>

            <ul className={classe}>
                <li><Link to="/">home</Link></li>
                <li><Link to="produtos">produtos</Link></li>
                <li><Link to="info">mais</Link></li>
                <li><Link to="suporte">suporte</Link></li>
            </ul>

            <div className="menu-nav" onClick={clickMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>)


}

export default Nav;