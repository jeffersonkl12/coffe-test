import "./button.scss";
import PropTypes from "prop-types";

const Button = ({classe,name,children}) =>{


    return (

        <button className={`button ${classe}`} name={name}>{children}</button>

    )


}

Button.propTypes = {

classe: PropTypes.string,
name: PropTypes.string

}

Button.defaultProps = {

classe: "medium",
name: "generico",
children: "ensira"

}

export default Button;
