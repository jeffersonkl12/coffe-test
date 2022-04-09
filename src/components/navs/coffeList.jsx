import "./coffeList.scss";
import Coffe1 from "../img/coffe-1.png";
import {useRef} from "react";

const CoffeList = ({clickEvent}) =>{

    const ativado = useRef(null);
 
    return(

        
       <ul className="coffe-list" ref={ativado} onClick={(e)=>{ 
            
            if(ativado.current.contains(e.target) && e.target.tagName.toLowerCase() === "img"){
                
                ativado.current.querySelectorAll("figure").forEach((v,i)=>{ 

                    v.classList.remove("ativado");

                    if(v.contains(e.target)){
                        v.classList.toggle("ativado");
                    }

                });
               
            }
         
       }}>
           
            <li><figure onClick={(e)=>{ clickEvent(0);}}><img src={Coffe1}/></figure></li>
            <li><figure onClick={(e)=>{ clickEvent(1);}}><img src={Coffe1}/></figure></li>
            <li><figure onClick={(e)=>{ clickEvent(2);}}><img src={Coffe1}/></figure></li>

       </ul>


    )

}

export default CoffeList;