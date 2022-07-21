// import React from React

function Table(props){

    const tableColumns = props.value.map((e,i)=>{
        return(
                <th key = {i}>{Object.keys(e)}</th>
        )
    })

    console.log(tableColumns)
    return(
        <div>{tableColumns}</div>
    )
}
export default Table
//     //trying to make table component reusable. Made a change to sku search line line. delete to revert changes

//     const mappedData = props.value.map((e,i)=>{
//         return(
               
//                     <tr key={i}>
//                         <td>{e.itemNumber.toUpperCase()}</td>
//                         <td>{e.color.toUpperCase()}</td>
//                         <td>{e.qty}</td>
//                         <td>{e.location.toUpperCase()}</td>
//                     </tr>
//             )

//     })

//     return(
//         <div>
//                 <table>
//                     <tbody>
//                         <tr>
//                             {/* Variables th, */}
//                         </tr>
//                         {mappedData}
//                     </tbody>
//                 </table>
//         </div>
//     )
// }
// export default Table