
function NewSalesOrder(){

    return(
        <div>
            <form>
                <label htmlFor="customerName">Customer Name</label>
                <input type="text" placeholder="Enter customer name"/>

                <label htmlFor="sku">Sku</label>
                <input type="text" placeholder="Enter full sku"/>

                <label htmlFor="color">Color</label>
                <input type="text" placeholder="Enter full color"/>

                <label htmlFor="quantity">Quantity</label>
                <input type="text" placeholder="Enter quantity"/>
            </form>
        </div>
    )
}