import React from 'react'
// import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import './itemStyle.css';
// import { Link } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const Items = props => {
   
    let { title, text1, _id } = props;
    return (
        <div className="row" style={{ borderBottom:'1.3px solid #ccc', paddingTop: '8px', paddingBottom:'8px', margin: '0 1px'}}>
            <div className="col-md-4 col-lg-4 col-xl-2 pr-0 paddingLeft">
                <div className="listitem2 text-center" style={{padding: '10px'}}>
                    <NavLink to="/assets/images/iphone_11.png" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox">
                        <img src="/assets/images/iphone_11.png" alt="" className="image_item" style={{maxWidth: '200px'}} />
                    </NavLink>
                    {/* <div className="liover" style={{width: '10%', height: '10%', backgroundColor: 'rgb(0, 153, 204)', position: 'absolute', top: 105, left: '110.5px', opacity: 0}} /> */}
                    {/* <a className="fav-icon" href="#" style={{top: 94, left: 221}} />
                    <a className="book-icon" href="details.html" style={{top: 94, left: '-25px'}} /> */}
                </div>
            </div>
            <div className="col-md-8 col-lg-8 col-xl-10 px-0">
                
                <div className="itemlabel3" style={{minHeight:'252px', padding: '10px'}}>
                    <div className="labelright">
                        <img src="/assets/images/filter-rating-5.png" width={60} alt="" /><br /><br /><br />
                        <img src="/assets/images/filter-rating-5.png" width={60} alt="" /><br />
                        <span className="size11 grey">18 Reviews</span><br /><br />
                        <span className="green size18"><b>$36.00</b></span><br />
                        <span className="size11 grey">avg/night</span><br /><br /><br />
                        <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                        </form>			
                    </div>
                    <div className="labelleft2 d-flex flex-column" style={{height: '100%', paddingRight: '15px'}}>			
                        {/* <br /><br /><br /> */}
                        <NavLink to={`/product-details/${_id}`} style={
                            { 
                                fontSize:'20px',
                                letterSpacing: '0.9px',
                                lineHeight:'0.63cm',
                                paddingInline:'5px'
                            }
                        } color="initial">{title}</NavLink>

                        <Typography 
                            paragraph={true} 
                            className="mt-1 cursor-pointer" 
                            style={{fontSize: '13px', 
                            fontWeight: '500', 
                            fontFamily: "Ember, Arial,sans-serif", 
                            color: 'rgb(17, 17, 17)'}} 
                            // color="initial"
                        >{text1}
                        </Typography>

                        <ul className="hotelpreferences iconpositions">
                            <li className="icohp-internet" />
                            <li className="icohp-air" />
                            <li className="icohp-pool" />
                            <li className="icohp-childcare" />
                            <li className="icohp-fitness" />
                            <li className="icohp-breakfast" />
                            <li className="icohp-parking" />
                            <li className="icohp-pets" />
                            <li className="icohp-spa" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Items.propTypes = {

// }

export default Items
