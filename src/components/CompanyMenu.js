import React from 'react';
import {useContext} from 'react'
import { DataContext } from '../Context/DataContext';
import {Link} from 'react-router-dom'
import Button from './Button';

function CompanyMenu(){
    //This is our mock database
    const database = useContext(DataContext);
    console.log(database)
    
    const company = database.map((item,i)=>{
        return (
           <Link to = '/MainMenu' style={{textDecoration: 'none'}}  key={i}> <Button value = {item.name}/></Link>
        )
     })

    return(
        
        <div>
            {company}
        </div>
    )

}


export default CompanyMenu