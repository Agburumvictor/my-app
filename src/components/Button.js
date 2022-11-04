import PropType from "prop-types"

const Button = ({color, text}) => {

    const onClick = () => {
        console.log("Click")
    }

    return(
        <button className="btn" onClick = {onClick}>Add</button>
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