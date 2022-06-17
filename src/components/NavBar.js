

function NavBar(props){
   
    return(
        <div style={{width: '100%', height: '30px', backgroundColor: 'black', color: 'white', position: 'absolute', top: '0', left: '0', textAlign: 'left'}}>
         {props.value}
        </div>
    )
}

export default NavBar