import React from "react";
import {RiSettingsLine} from 'react-icons/ri'
import {MdKeyboardArrowRight,MdKeyboardArrowDown,MdHelpCenter,MdSettings,MdMoney,MdPerson2,MdProductionQuantityLimits} from 'react-icons/md'
import {FaRegUserCircle} from 'react-icons/fa'

function Sidebar({OpenSidebarToggle, OpenSidebar}){

    return(
        <aside id="sidebar" className={OpenSidebarToggle ? "sidebar-responsive" :" "}>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <RiSettingsLine className='icon'/> DashBoard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="">
                    <RiSettingsLine className='icon'/> DashBoard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                    <MdProductionQuantityLimits className='icon'/> Product
                    </a>
                    <MdKeyboardArrowRight className='left-icon'/>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                    <MdPerson2 className='icon'/> Customers
                    
                    </a>
                    <MdKeyboardArrowRight className='left-icon'/>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                    <MdMoney className='icon'/> Income
                    
                    </a>
                    <MdKeyboardArrowRight className='left-icon'/>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                    <MdSettings className='icon'/> Promote
                    
                    </a>
                    <MdKeyboardArrowRight className='left-icon'/>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                    <MdHelpCenter className='icon'/> Help
                    </a>
                    <MdKeyboardArrowDown className='left-icon'/>
                </li>
            </ul>
            <div class="user-card">
                <div class="user-icon">
                <FaRegUserCircle className="user-icon"/>
                </div>
                <div class="user-info">
                    <h4>Evano</h4>
                    <h5>Project Manager</h5>
                </div>
                <div class="down">
                    <MdKeyboardArrowRight className='down'/>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;