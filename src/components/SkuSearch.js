import { DataContext } from "../Context/DataContext";
import NavBar from "./NavBar";
import React, {useState, useEffect, useContext} from 'react'
import SkuSearchResults from "../pages/SkuSearchResults";
import axios from 'axios';

function SkuSearch(){

    const [skuSearch, setSkuSearch] = useState('');
    const [color, setColor] = useState('');
    const [results, setResults] = useState([]);
    const [dataBase, setDataBase] = useState([]);
    
    useEffect(() => {
        axios
          .get(`http://localhost:3005/skus`)
          .then((response) => setDataBase(response.data));
    }, []);
    console.log('database from axios', dataBase);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('sku searched: ', skuSearch)
        const skuResults = dataBase.map(item=>{
            if(item.itemNumber == skuSearch.toLowerCase()){
                return item
            }
            else{
                return (
                    {
                        itemNumber: 'N/A',
                        color: 'N/A',
                        qty: 0,
                        location: 'N/A'
                    }
                )
            }
           
     });
     if(color){
        const withColor = skuResults.filter(item=>item.color == color.toLowerCase());
        console.log('styles found', skuResults)
        setResults(withColor);
     }
     else{
        setResults(skuResults);
     }
    }

    const mainMenu = <a href='#'>Main Menu</a>

    return(
        <div>
            <NavBar value = 'Company Menu > Main Menu > Sku Search'/>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <input style = {{width: '25%', margin: '2px'}} placeholder = 'SKU Search' type='text' value={skuSearch} onChange={(e)=>setSkuSearch(e.target.value)}/> 
                    <input style = {{width: '25%', margin: '2px'}} placeholder="Color" onChange={(e)=>setColor(e.target.value)}/>
                    <button type='submit'>Submit</button> 
                    <br/>
                    <h2>Style Searched: {skuSearch.toUpperCase()}</h2>
                </form>
                <SkuSearchResults value = {results}/>
            </div>
        </div>
    )
}

export default SkuSearch