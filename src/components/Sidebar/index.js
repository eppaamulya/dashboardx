import './index.css';
import { IoIosArrowDown } from "react-icons/io";
import {NavLink} from 'react-router-dom'
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";




const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className=''>
            <div className='menu-bar' onClick={toggleSidebar}>
                <IoMdMenu />
            </div>
        
        <div className={`aside-div ${isOpen ? 'open' : ''}`}>
            
            <aside>
            <div className='close-btn' onClick={closeSidebar}>
                        <IoMdClose />
                    </div>
                <ul className='dash-list'>
                    <li className='dash-listy'><NavLink to='/home'  className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}> Dashboard</NavLink></li>
                    <li className='dash-listy'><NavLink to='/inventory' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}> Inventory</NavLink></li>
                    <li className='dash-listy'><NavLink to='/orders' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Order</NavLink></li>
                    <li className='dash-listy'><NavLink to='/returns' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Returns</NavLink></li>
                    <li className='dash-listy'><NavLink to='/customers' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Customers</NavLink></li>
                    <li className='dash-listy'><NavLink to='/shipping' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Shipping</NavLink></li>
                    <li className='dash-listy'><NavLink to='/channel' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Channel</NavLink></li>
                    <li className='dash-listy'><NavLink to='/integrations' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Integrations</NavLink></li>
                    <div className='dash-list-div'>
                        <li className='dash-listy'><NavLink to='/calculators' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Calculators</NavLink></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-listy'><NavLink to='/reports' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Reports</NavLink></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-listy'><NavLink to='/account' className={({ isActive }) => isActive ? 'dash-list-item-0' : 'dash-list-item'}>Account</NavLink></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                </ul>
            </aside>
        </div>
        </div>
    )
}

export default Sidebar