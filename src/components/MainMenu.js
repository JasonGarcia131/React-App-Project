import React from 'react'
import Button from './Button'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

function MainMenu(){

    return(
        <div>
            <Link to = '/SearchSku'>
                <Button value='Search Sku'/>
            </Link>
                <Button value='Check Location'/>
                <Button value='Edit SKU'/>
                <Button value='Delete SKU'/>
        </div>
    )

}

export default MainMenu