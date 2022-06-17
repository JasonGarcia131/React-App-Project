import { findByLabelText } from "@testing-library/react"



function Button(props){

    const style =   {
    
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        height: '40px', 
        fontWeight: '550', 
        alignItems: 'center', 
        width: '100%', 
        border: '3px outset lightgrey', 
        backgroundColor: '#D6D6D6', 
        color: '#484848',
        textDecoration: 'none'
    }

    return(
        <button style={style}>
          {props.value}
        </button>
    )
}

export default Button