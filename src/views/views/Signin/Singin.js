import React from 'react'
// import PropTypes from 'prop-types'
import GlobalHelpers from '../../../helpers/helpers';
import { NavLink } from 'react-router-dom';
const helpers = new GlobalHelpers();


const SignIn = props => {
    // console.log('props');
    // console.log(props);
    // console.log('props');
    return ( 
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <NavLink to="../../index2.html"><b>Admin</b>LTE</NavLink>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>{
                                e.preventDefault();
                                
                                if (helpers.localStorageSync('__wua', 'save', 'jensy', 'encode')) {
                                    // alert()
                                    window.location.href = '/'
                                }

                            }}>Sign In</button>
                        </div>
                        </div>
                    </form>
                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <NavLink to="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                            </NavLink>
                            <NavLink to="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                            </NavLink>
                        </div>
                        <p className="mb-1">
                            <NavLink to="#" onClick={(e)=>{
                                e.preventDefault();
                                window.location.to = '/forgot-password'
                            }} className="text-center">I forgot my password</NavLink>
                        </p>

                        <p className="mb-0">
                            <NavLink to="#" onClick={(e)=>{
                                e.preventDefault();
                                window.location.to = '/sign-up'
                            }} className="text-center">Register a new membership</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// SignIn.propTypes = {

// }

export default SignIn
