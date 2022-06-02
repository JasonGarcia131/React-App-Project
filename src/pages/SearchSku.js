import { DataContext } from "../Context/DataContext";
import React, {useState, useContext} from 'react'
import DataTable from "../components/DataTable";

function SearchSku(){

    const database = useContext(DataContext);
    console.log('database', database);
    console.log('test',Object.values(database));

    const [skuSearch, setSkuSearch] = useState('');
    const [postResults, setPostResults] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setSkuSearch(e.target[0].value);
    }
    // console.log('sku search', skuSearch);

    const results = database.map(item=>{
            return item.sku
    });
    console.log('results', results)//use for(var i=0 in object)
    const foundSku = results.filter(item=>{
        if (item.length > 1){
           return item.filter(item=>item.styleNo == 'hy3031')
        }
        else{
            return item.styleNo == 'hy3031'   
        }
     });
     console.log('Found Sku', foundSku)
    // const display = results.filter(item=>item.styleNo===skuSearch)

    // const mappedData = results.map((e,i)=>{
    //     console.log('item', e);
    //     return(
    //        <div key={i}>
    //             <tr>
    //                 {/* <td>N/A</td>
    //                 <td>{e.styleNo}</td>
    //                 <td>{e.location}</td> */}
    //             </tr>
    //         </div>
    //     )
    // })

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input placeholder = 'SKU Search' type='text'/> 
                <button type='submit'>Submit</button> 
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>Style</th>
                            <th>Location</th>
                        </tr>
                        {/* {mappedData} */}
                    </tbody>
                </table>
               
                <DataTable/>
            </form>
        </div>
    )
}

export default SearchSku