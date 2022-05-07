import { DataContext } from "../Context/DataContext";
import React, {useState, useContext} from 'react'

function SearchSku(){

    const database = useContext(DataContext)
 console.log('test',Object.values(database))

    const [skuSearch, setSkuSearch] = useState('')
    const [postResults, setPostResults] = useState([])
    
    const foundSku = (e) => {
        setSkuSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       const results = database.filter(item=>item.sku.style==skuSearch)
        if(results){
            setPostResults(results)
            console.log(results)
        }else{
            console.log('failed')
        }

    }

    const mappedData = postResults.map((e,i)=>{
        return(
            <div key={i}>
               { e.name}
            </div>
        )
    })

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder = 'SKU Search' type='text' onChange={foundSku}/> 
                <button type='submit'>Submit</button> 
                <br/>
                {skuSearch}
                {mappedData}
            </form>
        </div>
    )
}

export default SearchSku