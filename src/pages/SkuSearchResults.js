

function SkuSearchResults(props) {

    const mappedData = props.value.map((e,i)=>{
       

        return(
                    <tr key={i}>
                        <td>{e.itemNumber.toUpperCase()}</td>
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
                            <th>Location</th>
                        </tr>
                        {mappedData}
                    </tbody>
                </table>
        </div>
    )

}

export default SkuSearchResults