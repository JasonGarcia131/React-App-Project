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
        sku: { style: 'hy3031', color: 'bk', qty: '12', location: 'dc-02'},
    },
    {
        name: 'Emperia',
        activeSalesOrders: 811123,
        canceledSalesOrders: 811456,
        shippedSalesOrders: 811789,
        sku: { style: 'kp1004', color: 'wt', qty: '50', location: 'dg-01'},
    },
    {
        name: 'Malibu',
        activeSalesOrders: 833123,
        canceledSalesOrders: 833456,
        shippedSalesOrders: 833789,
        sku: { style: 'hy3031', color: 'bk', qty: '12', location: 'dc-02'},
    },
    {
        name: 'Le Bag',
        activeSalesOrders: 833123,
        canceledSalesOrders: 833456,
        shippedSalesOrders: 833789,
        sku: { style: 'hy3031', color: 'bk', qty: '12', location: 'dc-02'},
    },
    {
        name: 'Urban Design',
        activeSalesOrders: 833123,
        canceledSalesOrders: 833456,
        shippedSalesOrders: 833789,
        sku: { style: 'hy3031', color: 'bk', qty: '12', location: 'dc-02'},
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
