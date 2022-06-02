import './App.css';
import CompanyMenu from './components/CompanyMenu';
import React, {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainMenu from './components/MainMenu';
import { DataContext } from './Context/DataContext';
import NavBar from './components/NavBar';
import SearchSku from './pages/SearchSku';


function App() {


  const database = [
    {
        name: 'Deluxity',
        activeSalesOrders: 833123,
        canceledSalesOrders: 833456,
        shippedSalesOrders: 833789,
        sku: [{styleNo: 'hy3031', color: 'bk', qty: '12', location: 'dc-02'},{styleNo: 'hy3031', color: 'wt', qty: '10', location: 'dg-02'},{styleNo: 'hy2038A', color: 'bk', qty: '12', location: 'dc-02'}]
    },
    {
        name: 'Emperia',
        activeSalesOrders: 811123,
        canceledSalesOrders: 811456,
        shippedSalesOrders: 811789,
        sku: { styleNo: 'kp1004', color: 'wt', qty: '50', location: 'dg-01'},
    },
    {
        name: 'Malibu',
        activeSalesOrders: 100123,
        canceledSalesOrders: 100456,
        shippedSalesOrders: 100789,
        sku: { styleNo: 'ml1256', color: 'tn', qty: '12', location: 'dh-02'},
    },
    {
        name: 'Le Bag',
        activeSalesOrders: 2001223,
        canceledSalesOrders: 200456,
        shippedSalesOrders: 200789,
        sku: { styleNo: 'le111', color: 'bk', qty: '12', location: 'df-02'},
    },
    {
        name: 'Urban Design',
        activeSalesOrders: 400123,
        canceledSalesOrders: 400456,
        shippedSalesOrders: 400789,
        sku: { styleNo: 'ul101', color: 'wt', qty: '12', location: 'de-02'},
    },
]
  return (
    <div className="App">
      <Router>
          <DataContext.Provider value = {database}>
            <Routes>
                <Route exact path= "/" element={<CompanyMenu/>}/>
                <Route path= "/MainMenu" element={<MainMenu/>}/>
                <Route path= "/SearchSku" element={<SearchSku/>}/>
            </Routes>
          </DataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
