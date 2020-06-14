import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


const ForgotPassword = props => {
    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault()
                        window.location.href = '/'
                        }}>
                        <b>Admin</b>LTE
                    </NavLink>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                        <form >
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-3 mb-1">
                            <NavLink to="#" onClick={(e)=>{
                                e.preventDefault();
                                window.location.href = '/sign-in'
                            }} className="text-center">Login</NavLink>
                        </p>
                        <p className="mb-0">
                            <NavLink to="#" onClick={(e)=>{
                                e.preventDefault();
                                window.location.href = '/sign-up'
                            }} className="text-center">Register a new membership</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ForgotPassword.propTypes = {

// }

export default ForgotPassword;
