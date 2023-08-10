import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'; 

import './Layout.css';

const Layout = () => {
  return (
    <div className="container">
            <div className="row">
                <div className="col-md-auto sidebar">
                    <Sidebar />
                </div>
                <div className="col-md-9 header">
                    <Header />
                    <div className="row">
                        <div 
                            className="col-md-12 outlet">
                            <Outlet />
                        </div>
                        <div className="col-md-9 footer">
                            <Footer />
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
  )
}

export default Layout;
