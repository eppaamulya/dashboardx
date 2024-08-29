// import './App.css';
// import Home from './components/Home';

// const App = () => {
//   return (
//     <div className="App">
//         <Home />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Returns from './components/Returns';
import Customers from './components/Customers';
import Shipping from './components/Shipping';
import Integrations from './components/Integrations';
import Calculators from './components/Calculators';
import Reports from './components/Reports';
import Account from './components/Account';
import Channel from './components/Channel';
// Import other components as needed

const App = () => {
    return (
        
            <div className="home-bg">
                <Sidebar />
                <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/returns" element={<Returns />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/channel" element={<Channel />} />
                        <Route path="/integrations" element={<Integrations />} />
                        <Route path="/calculators" element={<Calculators />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
            </div>
        
    );
}

export default App;
