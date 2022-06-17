import React from 'react'
import Button from './Button'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'

function MainMenu(){

    const mainMenu = <a href = '/'>Company Menu</a>
    console.log('main menu', mainMenu)
    return(
        <div>
            <NavBar value = {`${mainMenu.props.href} > Main Menu`}/>
            <div className='App'>
                <Link to = '/SalesOrders'>
                    <Button value='Sales Orders'/>
                </Link>
                <Link to = '/SkuSearch'>
                    <Button value='Search Sku'/>
                </Link>
                <Link to = '/CheckLocation'>
                    <Button value='Check Location'/>
                </Link>
                <Link to = 'UpdateSku'>
                    <Button value='Update SKU'/>
                </Link>
                <Link to = 'DeleteSku'>
                    <Button value='Delete SKU'/>
                </Link>
            </div>
        </div>
    )

}

export default MainMenu