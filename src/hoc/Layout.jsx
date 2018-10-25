import React from 'react';
import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import Loader from './../components/layout/Loader';

const Layout = props => {
    return (
        <div>
            <Header/>

            {props.children}

            <Footer/>
            <Loader/>
        </div>
    );
};

export default Layout;