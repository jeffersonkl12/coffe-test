import "./navList.scss";

const NavList = ({children}) =>{



    return (


        <ul className="nav-list">
            {children.map((v,i)=>{
            
            return <li key={i}><a key={i}>{v}</a></li>
            })}
        </ul>

    )



}

export default NavList;