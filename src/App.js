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


const App = () => {
    return (
        <div className="home-bg">
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/inventory" element={<Inventory />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/returns" element={<Returns />} />
                    <Route exact path="/customers" element={<Customers />} />
                    <Route exact path="/shipping" element={<Shipping />} />
                    <Route exact path="/channel" element={<Channel />} />
                    <Route exact path="/integrations" element={<Integrations />} />
                    <Route exact path="/calculators" element={<Calculators />} />
                    <Route exact path="/reports" element={<Reports />} />
                    <Route exact path="/account" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
