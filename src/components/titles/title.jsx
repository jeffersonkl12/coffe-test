import "./title.scss";
import PropTypes from "prop-types";

const Title = ({title, info, classe}) =>{

    return(

        <div className={`title-container ${classe}`}>

                <h1>{title}</h1>
                <p>{info}</p>
        </div>


    )


}

Title.propTypes = {


title: PropTypes.string.isRequired,
info: PropTypes.string,
classe: PropTypes.string
}

Title.defaultProps = {

classe: "simple"    


}


export default Title;