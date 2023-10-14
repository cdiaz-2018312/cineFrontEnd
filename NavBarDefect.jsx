
import { Link } from 'react-router-dom';
import React from 'react';
import "react-multi-carousel/lib/styles.css";


export const NavBarDefect = () => {

    return (
        <>
        {"                  "}  <h1 className="logo">cine charlys</h1> {"                  "} 
            <nav className="navbar">
                <div className="navbar-container cont">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
               
                        <li>
                            <div className="dropdown">
            
                                <ul>
                                    <li className="active"><Link to="/Login">Login</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
          
      
        </>
    );
};
