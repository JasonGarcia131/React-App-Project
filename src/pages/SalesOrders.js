import React, {Link} from 'react-router-dom';
import Button from '../components/Button';

function SalesOrders(){
    return(
        <div>
            <Link to="/RecordPicklist"><Button value="Record"/></Link>
            <Link to="/Verify"><Button value="Verify"/></Link>
            <Link to="/Final"><Button value="Final"/></Link>
            <Link to="/Cancelled"><Button value="Cancelled"/></Link>
        </div>
    )
}

export default SalesOrders;