import { DataContext } from "../Context/DataContext";
import NavBar from "./NavBar";
import React, {useState, useEffect, useContext} from 'react'
import SkuSearchResults from "../pages/SkuSearchResults";
import axios from 'axios';

function SkuSearch1(){

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
        const skuSearchedArray = skuSearch.split(' ');
        console.log(skuSearchedArray)
        if(skuSearchedArray.length == 1){
            const skuResults = dataBase.filter(item=>{
               return item.itemNumber == skuSearchedArray[0].toLowerCase()
            })
            if(skuResults.length){
                setResults(skuResults)
            }else{
                setResults([{
                    itemNumber: 'N/A',
                    color: 'N/A',
                    qty: 0
                }])
                //the else above does not work. Need to catch the error if skuResults is undefinded
            }
        }
        else if(skuSearchedArray.length == 2){
            const skuResults = dataBase.filter(item=>{
                return item.color == skuSearchedArray[1].toLowerCase()
             })
             if(skuResults.length){
                setResults(skuResults)
             }else{
                console.log('color not exist')
             }
            
        }
        
        console.log('results', results)
    }

    const mainMenu = <a href='#'>Main Menu</a>

    return(
        <div>
            <NavBar value = 'Company Menu > Main Menu > Sku Search'/>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <input style = {{width: '25%', margin: '2px'}} placeholder = 'SKU Search' type='text' value={skuSearch} onChange={(e)=>setSkuSearch(e.target.value)}/> 
                    <button type='submit'>Submit</button> 
                    <br/>
                    <h2>Style Searched: {skuSearch.toUpperCase()}</h2>
                </form>
                <SkuSearchResults value = {results}/>
            </div>
        </div>
    )
}

export default SkuSearch1