import { findByLabelText } from "@testing-library/react"



function Button(props, ck){

    const style =   {

        display: "flex",
        flexDirection: "column",
        height: '40px', 
        fontWeight: '550', 
        textAlign: 'center', 
        width: '120px', 
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