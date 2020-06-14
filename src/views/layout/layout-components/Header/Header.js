import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import GlobalHelpers from '../../../../helpers/helpers';
const helpers = new GlobalHelpers();
const isLogged = helpers.localStorageSync('__wua', 'get', null, 'decode');
const Header = () => {
    return (
        <Fragment>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    {isLogged &&
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></NavLink>
                        </li>
                    }
                    <li className="nav-item d-none d-sm-inline-block">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <NavLink to="#" className="nav-link">Contact</NavLink>
                    </li>
                </ul>
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" data-toggle="dropdown" to="#">
                            <i className="far fa-comments" />
                            <span className="badge badge-danger navbar-badge">3</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <NavLink to="#" className="dropdown-item">
                                <div className="media">
                                    <img src="/assets/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">Call me whenever you can...</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item">
                                <div className="media">
                                    <img src="/assets/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">I got your message bro</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item">
                                <div className="media">
                                    <img src="/assets/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                                        </h3>
                                        <p className="text-sm">The subject goes here</p>
                                        <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </NavLink>
                                <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item dropdown-footer">See All Messages</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link" data-toggle="dropdown" to="#">
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge">15</span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">15 Notifications</span>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item">
                            <i className="fas fa-envelope mr-2" /> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                            </NavLink>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item">
                            <i className="fas fa-users mr-2" /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                            </NavLink>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item">
                            <i className="fas fa-file mr-2" /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                            </NavLink>
                            <div className="dropdown-divider" />
                            <NavLink to="#" className="dropdown-item dropdown-footer">See All Notifications</NavLink>
                        </div>
                    </li>
                    {isLogged &&
                        <li className="nav-item">
                            <NavLink className="nav-link" data-widget="control-sidebar" data-slide="true" to="#" role="button">
                                <i className="fas fa-th-large" />
                            </NavLink>
                        </li>
                    }
                    {!isLogged &&
                        <Fragment>
                            <li className="nav-item d-none d-sm-inline-block">
                                <NavLink to="/sign-in" className="nav-link" onClick={(e)=>{
                                e.preventDefault();
                                window.location.href = '/sign-in';
                            }} >Sign In</NavLink>
                            </li>
                            <li className="nav-item d-none d-sm-inline-block">
                                <NavLink to="/sign-up" className="nav-link" onClick={(e)=>{
                                e.preventDefault();
                                window.location.href = '/sign-up';
                            }}>Register</NavLink>
                            </li>
                        </Fragment>
                    }
                    {isLogged &&
                        <li className="nav-item d-none d-sm-inline-block">
                            <NavLink to="/logout" className="nav-link" onClick={(e)=>{
                                e.preventDefault();
                                if (helpers.localStorageSync('__wua', 'remove', null, null)) {
                                    helpers.localStorageSync('__BPass', 'save', 'yes', 'encode')
                                    window.location.href = '/sign-in';
                                }
                            }} >LogOut</NavLink>
                        </li>
                    }
                </ul>
            </nav>

        </Fragment>
    )
}

export default Header
