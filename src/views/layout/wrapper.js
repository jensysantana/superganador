import React from 'react'
import Header from '../layout/layout-components/Header/Header';
import Content from '../layout/layout-components/Content/Content';
import RigthSideBar from '../layout/layout-components/RigthSideBar/RigthSideBar';
import LeftSideBar from '../layout/layout-components/LeftSideBar/LeftSideBar';
import Footer from '../layout/layout-components/Footer/Footer';
import GlobalHelpers from '../../helpers/helpers';
const helpers = new GlobalHelpers();

const LayoutDashboard = (props) => {

    return (
        <div className="wrapper">
            <Header />
            {helpers.localStorageSync('__wua', 'get', null, 'decode') &&
                <LeftSideBar />
            }
            <Content />
            <RigthSideBar />
            <Footer />
        </div>  
    )
}

export default LayoutDashboard;
