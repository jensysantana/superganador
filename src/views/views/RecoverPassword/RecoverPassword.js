import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const RecoverPassword = props => {

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="login-logo">
                    <NavLink to="#" onClick={(e)=>{
                        e.preventDefault()
                        window.location.to = '/'
                    }}><b>Admin</b>LTE</NavLink>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
                        <form >
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Confirm Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Change password</button>
                                </div>
                            </div>
                        </form>
                        <p className="mt-3 mb-1">
                            <NavLink to="/sign-in" onClick={(e)=>{
                                e.preventDefault()
                                window.location.to = '/sign-in'
                            }}>Login</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// RecoverPassword.propTypes = {

// }

export default RecoverPassword;
