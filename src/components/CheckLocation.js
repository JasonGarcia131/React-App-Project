import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataContext";
import LocationResults from "../pages/LocationResults";

function CheckLocation() {

    const database = useContext(DataContext);
    const [locationSearched, setLocationSearched] = useState('');
    const [results, setResults] = useState([]);

    useEffect(()=>{
        console.log(locationSearched);
    });

    const handleSearch = (e) =>{
        e.preventDefault()
        const locResults = database.map(item=>{
            return item.sku
     });
     
        const locFound = locResults.map(item=>{
            return item.filter(item=>{
                 if(item.location == locationSearched){
                     return item
                 }
             })
         })

        setResults(locFound)
    }

    // onChange={(e)=>setLocationSearched(e.target[0].value)}
    
    return(
        <div>
            <h2>Search by Location</h2>
            <form onSubmit={handleSearch}>
                <input type = 'text' placeholder="Location Search" value={locationSearched} onChange={(e)=>setLocationSearched(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            <h2>Location Searched: {locationSearched.toUpperCase()}</h2>
            <LocationResults value={results}/>
        </div>
    )
}
//need to fix the location results

export default CheckLocation