import { useState } from "react"

function RecordPicklist(){
    const [salesorder, setSalesOrder] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit: ', salesorder)
        //use axios to make a post request to the controllers
    }

    return(
        <div>
            <h1>Record Picklist</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="salesorder">Enter Sales Order</label>
                <input name="salesorder" value={salesorder} onChange={(e)=>setSalesOrder(e.target.value)}/>
                <button type="submit">Record</button>
            </form>
        </div>
    )
}

export default RecordPicklist