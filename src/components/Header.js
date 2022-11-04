import PropType from "prop-types"
import Button from "./Button"


const Header = ({title}) => {

    return (
        <header className="header">
        <h1> {title} </h1>
        <Button color= "green" text="Add" onClick = {onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}


Header.propType = {
title: PropType.string.isRequired,
}

export default Header