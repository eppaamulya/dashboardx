import './index.css';
import { IoIosArrowDown } from "react-icons/io";
import Home from '../Home';


const Sidebar = () => {
    return (
        <div className='aside-div'>
            <aside>
                <ul className='dash-list'>
                    <li className='dash-list-item-0'><a href={<Home />}>Dashboard</a></li>
                    <li className='dash-list-item'><a href={<Home />}>Inventory</a></li>
                    <li className='dash-list-item'><a>Order</a></li>
                    <li className='dash-list-item'><a>Returns</a></li>
                    <li className='dash-list-item'><a>Customers</a></li>
                    <li className='dash-list-item'><a>Shipping</a></li>
                    <li className='dash-list-item'><a>Integrations</a></li>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'><a>Calculators</a></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'><a>Reports</a></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                    <div className='dash-list-div'>
                        <li className='dash-list-item'><a>Account</a></li>
                        <IoIosArrowDown className='icon' />
                    </div>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar