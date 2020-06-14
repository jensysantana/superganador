import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
    return (
        <Fragment>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4" id="main-sidebar">
                {/* Brand Logo */}
                <NavLink to="/" className="brand-link">
                    <img src={process.env.PUBLIC_URL+ "/assets/dist/img/AdminLTELogo.png"} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                    <span className="brand-text font-weight-light">Admin panel</span>
                </NavLink>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={process.env.PUBLIC_URL+ "/assets/dist/img/user2-160x160.jpg"} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <NavLink to="/user-profile" className="d-block">Alexander Pierce</NavLink>
                        </div>
                    </div> */}
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">

                                <img src={process.env.PUBLIC_URL+ "/assets/dist/img/user2-160x160.jpg"} 
                                    className="img-circle elevation-2" alt="" 
                                    style={{width: '30px'}}
                                />
                                
                                {/* <i className="nav-icon fas fa-chart-pie" /> */}
                                <p>
                                    &nbsp;  Profile
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/user-profile" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Profile</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/invoice" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Invoice</p>
                                    </NavLink>
                                </li>
                               
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../../index.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v1</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../../index2.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v2</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../../index3.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Dashboard v3</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-chart-pie" />
                                <p>
                                    Products
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="/products" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Products</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/create-product" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Create product</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../charts/flot.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Flot</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../charts/inline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Inline</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="../widgets.html" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                Widgets
                                <span className="right badge badge-danger">New</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-copy" />
                                <p>
                                    Layout Options
                                    <i className="fas fa-angle-left right" />
                                    <span className="badge badge-info right">6</span>
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../layout/top-nav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/top-nav-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Top Navigation + Sidebar</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/boxed.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Boxed</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/fixed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Sidebar</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/fixed-topnav.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Navbar</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/fixed-footer.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Fixed Footer</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../layout/collapsed-sidebar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Collapsed Sidebar</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-tree" />
                                <p>
                                    UI Elements
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../UI/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/icons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Icons</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/buttons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Buttons</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/sliders.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Sliders</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/modals.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Modals &amp; Alerts</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/navbar.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Navbar &amp; Tabs</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/timeline.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Timeline</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../UI/ribbons.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Ribbons</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                Forms
                                <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>General Elements</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Advanced Elements</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Editors</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Validation</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-table" />
                                <p>
                                    Tables
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../tables/simple.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Simple Tables</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../tables/data.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>DataTables</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../tables/jsgrid.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>jsGrid</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-header">EXAMPLES</li>
                        <li className="nav-item">
                            <NavLink to="../calendar.html" className="nav-link">
                                <i className="nav-icon far fa-calendar-alt" />
                                <p>
                                Calendar
                                <span className="badge badge-info right">2</span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="../gallery.html" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                Gallery
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon far fa-envelope" />
                                <p>
                                Mailbox
                                <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../mailbox/mailbox.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Inbox</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../mailbox/compose.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Compose</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../mailbox/read-mail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Read</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="nav-icon fas fa-book" />
                                <p>
                                    Pages
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <NavLink to="../examples/invoice.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Invoice</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/profile.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Profile</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/e-commerce.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>E-commerce</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/projects.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Projects</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/project-add.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Add</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/project-edit.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Edit</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/project-detail.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Project Detail</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="../examples/contacts.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Contacts</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item has-treeview menu-open">
                            <NavLink to="#" className="nav-link active">
                                <i className="nav-icon far fa-plus-square" />
                                <p>
                                Extras
                                <i className="fas fa-angle-left right" />
                                </p>
                            </NavLink>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <NavLink to="../examples/login.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Login</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/register.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Register</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/forgot-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Forgot Password</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/recover-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Recover Password</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/lockscreen.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Lockscreen</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/legacy-user-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Legacy User Menu</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/language-menu.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Language Menu</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/404.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Error 404</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/500.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Error 500</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/pace.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Pace</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../examples/blank.html" className="nav-link active">
                                <i className="far fa-circle nav-icon" />
                                <p>Blank Page</p>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="../../starter.html" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Starter Page</p>
                            </NavLink>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-header">MISCELLANEOUS</li>
                        <li className="nav-item">
                        <NavLink to="https://adminlte.io/docs/3.0" className="nav-link">
                            <i className="nav-icon fas fa-file" />
                            <p>Documentation</p>
                        </NavLink>
                        </li>
                        <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                        <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                            <i className="fas fa-circle nav-icon" />
                            <p>Level 1</p>
                        </NavLink>
                        </li>
                        <li className="nav-item has-treeview">
                        <NavLink to="#" className="nav-link">
                            <i className="nav-icon fas fa-circle" />
                            <p>
                            Level 1
                            <i className="right fas fa-angle-left" />
                            </p>
                        </NavLink>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                            <NavLink to="#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Level 2</p>
                            </NavLink>
                            </li>
                            <li className="nav-item has-treeview">
                            <NavLink to="#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>
                                Level 2
                                <i className="right fas fa-angle-left" />
                                </p>
                            </NavLink>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                <NavLink to="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon" />
                                    <p>Level 3</p>
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon" />
                                    <p>Level 3</p>
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="#" className="nav-link">
                                    <i className="far fa-dot-circle nav-icon" />
                                    <p>Level 3</p>
                                </NavLink>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <NavLink to="#" className="nav-link">
                                <i className="far fa-circle nav-icon" />
                                <p>Level 2</p>
                            </NavLink>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                            <i className="fas fa-circle nav-icon" />
                            <p>Level 1</p>
                        </NavLink>
                        </li>
                        <li className="nav-header">LABELS</li>
                        <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">Important</p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-warning" />
                            <p>Warning</p>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                            <i className="nav-icon far fa-circle text-info" />
                            <p>Informational</p>
                        </NavLink>
                        </li>
                    </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </Fragment>
    )
}

export default LeftSideBar;
