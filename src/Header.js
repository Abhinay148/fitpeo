import React from "react";
import{BsSearch, BsJustify} from 'react-icons/bs'
function Header ({OpenSidebar}){
    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className='icon' onClick={OpenSidebar}/>
            </div>
            <div className="header-left">
                <h3>Hi Saurabh</h3>
            </div>
            <div className="header-right">
                <form className='search'>
                    <input className='submit' type='search' placeholder='Search...'></input>
                </form>
          </div>
        </header>
    )
}

export default Header;