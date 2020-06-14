import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const TesterMaterial = props => {
    return (
        <div className="navbar-wrapper2 navbar-fixed-top">
            <div className="container">
                <div className="navbar mtnav">
                <div className="container offset-3">
                    {/* Navigation*/}
                    <div className="navbar-header">
                    <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a href="index.html" className="navbar-brand"><img src="images/logo.png" alt="Travel Agency Logo" className="logo" /></a>
                    </div>
                    <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown active">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="index.html">Home <span className="badge indent0">1</span><b className="lightcaret mt-2" /></a>
                        <ul className="dropdown-menu posright-0">
                            <li>
                            <div className="row dropwidth01">
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Homepages</li>	
                                <li><a href="index.html">Home 1 minimal</a></li>
                                <li><a href="index2.html">Home 2 offers</a></li>
                                <li><a href="index3.html">Home 3 full search</a></li>
                                <li><a href="index4.html">Home 4 presentation</a></li>
                                <li><a href="index5.html">Home 5 footer2</a></li>
                                <li><a href="index6.html">Home 6 full</a></li>
                                <li><a href="index7.html">Home 7 </a></li>
                                <li><a href="z-new-homepage.html">New Homepage</a> <span className="green">new</span></li>									  
                                </ul>
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Intro pages</li>
                                <li><a href="intro.html">Intro 1</a></li>
                                <li><a href="intro2.html">Intro 2 - slides</a> <span className="glyphicon glyphicon-star lblue" /></li>
                                <li><a href="intro3.html">Intro 3 - slides2</a> <span className="glyphicon glyphicon-star lblue" /></li>
                                </ul>
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Colors</li>
                                <li><a href="#">Blue</a></li>
                                <li><a href="../green/index.html">Green</a></li>
                                <li><a href="../orange/index.html">Orange</a></li>
                                <li><a href="../cyan/index.html">Cyan</a></li>
                                <li />
                                <li className="inactive size10 lgrey caps"><span className="glyphicon glyphicon-star " /> Popular pages</li>								  
                                </ul>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">Pages <span className="badge indent0">14</span><b className="lightcaret mt-2" /></a>
                        <ul className="dropdown-menu posright-0">
                            <li>
                            <div className="row dropwidth01">
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Inner pages</li>	
                                <li><a href="list.html">List page 1</a></li>
                                <li><a href="list2.html">List page 2</a></li>
                                <li><a href="list3.html">List page 3</a></li>
                                <li><a href="list4.html">List page 4</a></li>
                                <li><a href="details.html">Details page</a></li>
                                <li><a href="payment.html">Payment</a></li>
                                <li><a href="blog.html">Blog page</a></li>
                                <li><a href="blog-details.html">Blog details</a></li>	
                                <li><a href="about.html">About</a></li>								  
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="profile.html">User Profile</a>  <span className="glyphicon glyphicon-star lblue" /></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="dashboard/index.html">Dashboard</a>  <span className="glyphicon glyphicon-star lblue" /></li>								  
                                </ul>	
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Update - <span className="green">14 New Pages</span></li>	
                                <li><a href="z-new-homepage.html">New Homepage</a>  <span className="glyphicon glyphicon-star lblue" /></li>
                                <li><a href="z-flights-list.html">Flights list</a>  <span className="glyphicon glyphicon-star lblue" /></li>
                                <li><a href="z-flights-payment.html">Flights payment</a></li>
                                <li><a href="z-cruise-list.html">Cruise list</a></li>
                                <li><a href="z-cruise-payment.html">Cruise payment</a></li>
                                <li><a href="z-rentacar-list.html">Rent a car list</a></li>
                                <li><a href="z-rentacar-details.html">Rent a car details</a></li>
                                <li><a href="z-rentacar-payment.html">Rent a car payment</a></li>
                                <li><a href="z-transfers-list.html">Transfers list</a></li>
                                <li><a href="z-transfers-payment.html">Transfers payment</a></li>
                                <li><a href="z-activities-list.html">Activities list</a></li>
                                <li><a href="z-activities-details.html">Activities details</a></li>
                                <li><a href="z-activities-payment.html">Activities payment</a></li>
                                <li><a href="z-wearesearching.html">Loading page</a></li>
                                </ul>								
                                <ul className="droplist col-md-4">
                                <li className="dropdown-header">Bootstrap Shortcodes</li>	
                                <li><a href="http://getbootstrap.com/components/" target="_blank">Components</a></li>								  
                                <li><a href="http://getbootstrap.com/javascript/" target="_blank">Javascript</a></li>								  
                                <li><a href="http://getbootstrap.com/css/" target="_blank">Css</a></li>	
                                <li className="dropdown-header">Comming next</li>	
                                <li className="inactive"><a href="#">More Home pages</a></li>
                                <li className="inactive"><a href="#">Elements</a></li>
                                <li className="inactive"><a href="#">...</a></li>
                                <li />								  
                                <li className="inactive size10 lgrey caps"><span className="glyphicon glyphicon-star " /> Popular pages</li>
                                </ul>									
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Flights</a></li>
                        <li><a href="#">Vacations</a></li>
                        <li><a href="#">Cars</a></li>			  
                        <li><a href="#">Cruises</a></li>			  
                        <li><a href="#">Last minute</a></li>			  
                        <li><a href="#">Early booking</a></li>			  
                        <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle" href="#">Deals<b className="lightcaret mt-2" /></a>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">Aligned Right Dropdown</li>	
                            <li><a href="#">Sample Link 1</a></li>
                            <li><a href="#">Sample Link 2</a></li>
                        </ul>
                        </li>		
                    </ul>
                    </div>
                    {/* /Navigation*/}			  
                </div>
                </div>
            </div>
        </div>

    )
}

TesterMaterial.propTypes = {

}

export default TesterMaterial;
