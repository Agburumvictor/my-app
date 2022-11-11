import PropType from "prop-types"

const Button = ({color, text, onClick}) => {

    return(
        <button className="btn" style = {{backgroundColor:color}} onClick = {onClick}>Add</button>
    )
}
export default Button

Button.defaultProps ={
    color:"steelblue",
}

Button.propTypes = {
    color : PropType.string,
    text : PropType.string

}