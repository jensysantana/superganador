import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.0.5
                </div>
                <strong>Copyright © 2014-2019 <NavLink to="http://adminlte.io">AdminLTE.io</NavLink>.</strong> All rights
                reserved.
            </footer>
        </Fragment>
    )
}

export default Footer;
