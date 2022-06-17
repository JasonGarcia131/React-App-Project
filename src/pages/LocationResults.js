

function LocationResults(props) {


    const mappedData = props.value.map((e,i)=>{
       
        if(e.length > 0){
            console.log('e', e)
        return(

                e.map((item,i)=>(
                    
                    <tr key={i}>
                        <td>{item.styleNo.toUpperCase()}</td>
                        <td>{item.color.toUpperCase()}</td>
                        <td>{item.qty}</td>
                    </tr>
            ))
        )
        }
    })
    return(

        <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Qty</th>
                        </tr>
                        {mappedData}
                    </tbody>
                </table>
        </div>
    )

}

export default LocationResults