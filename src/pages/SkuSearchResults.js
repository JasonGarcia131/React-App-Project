//need to find a way to catch the error if item doesnt exist

function SkuSearchResults(props) {

    
    const mappedData = props.value.map((e,i)=>{
       

        return(
                    <tr key={i}>
                        <td>{e.itemNumber.toUpperCase()}</td>
                        <td>{e.color.toUpperCase()}</td>
                        <td>{e.qty}</td>
                        <td>{e.location.toUpperCase()}</td>
                    </tr>
            )

    })
    return(

        <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Style</th>
                            <th>Color</th>
                            <th>Qty</th>
                            <th>Location</th>
                        </tr>
                        {mappedData}
                    </tbody>
                </table>
        </div>
    )

}

export default SkuSearchResults