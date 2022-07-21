// import React from React

// function Table(props){


//     const tableColumns = props.tableColumns.map((e,i)=>{
//         return(
//                 <th key = {i}>{e}</th>
//         )
//     })

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