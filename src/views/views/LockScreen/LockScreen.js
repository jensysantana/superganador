import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const LockSreen = props => {
    return (
        <div className="lockscreen-wrapper">
            <div className="lockscreen-logo">
                <NavLink to="/"onClick={(e)=>{
                    e.preventDefault();
                    window.location.href = '/';
                }} ><b>Admin</b>LTE</NavLink>
            </div>
            <div className="lockscreen-name text-center">John Doe</div>
                <div className="lockscreen-item">
                    <div className="lockscreen-image">
                        <img src="/assets/dist/img/user1-128x128.jpg" alt="User" />
                    </div>
                    <form className="lockscreen-credentials">
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="password" />
                            <div className="input-group-append">
                                <button type="button" className="btn"><i className="fas fa-arrow-right text-muted" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            <div className="help-block text-center">
                Enter your password to retrieve your session
            </div>
            <div className="text-center">
                <NavLink to="/sign-in"onClick={(e)=>{
                    e.preventDefault();
                    window.location.href = '/sign-in';

                }} >Or sign in as a different user</NavLink>
            </div>
            <div className="lockscreen-footer text-center">
                Copyright © 2014-2019 <b><NavLink to="/" onClick={(e)=>{
                    e.preventDefault();
                    window.location.href = '/';

                }} className="text-black">AdminLTE.io</NavLink></b><br />
                All rights reserved
            </div>
        </div>
    )
}

// LockSreen.propTypes = {

// }

export default LockSreen;
