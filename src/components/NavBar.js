

function NavBar(props){
   
    return(
        <div style={{width: '100%', height: '30px', backgroundColor: 'black', color: 'white'}}>
         {props.value}
        </div>
    )
}

export default NavBar