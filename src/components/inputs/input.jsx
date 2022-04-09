import "./input.scss";
import PropTypes from "prop-types";

const Input = ({ tipo, placeholder, classe, name, icon }) => {



    return (

        <div className={`input-container ${classe}`}>
            <input tyoe={tipo} placeholder={placeholder} name={name} />
            <span className="icon">{icon}</span>
        </div>
    )

}

Input.propTypes = {

    tipo: PropTypes.string,
    placeholder: PropTypes.string,
    classe: PropTypes.string,
    name: PropTypes.string,
    icon: PropTypes.element
}

Input.defaultProps = {

    tipo: "text",
    placeholder: "teste",
    name: "generico",
    classe: "medium"
}


export default Input;