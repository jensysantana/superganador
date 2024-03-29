import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
// import PropTypes from 'prop-types'

const NotFound404 = props => {
    return (
        <Fragment>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>404 Error Page</h1>
                        </div>
                        <div className="col-sm-6 text-right">
                            <h1>404 Error Page</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="error-page">
                    <h2 className="headline text-warning"> 404</h2>
                    <div className="error-content">
                        <h3><i className="fas fa-exclamation-triangle text-warning" /> Oops! Page not found.</h3>
                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may 
                            <NavLink to="/" onClick={(e)=>{
                                e.preventDefault();
                                window.location.href = '/'
                            }}>return to home page</NavLink> or try using the search form.
                        </p>
                        <form className="search-form">
                            <div className="input-group">
                                <input type="text" name="search" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <button type="submit" name="submit" className="btn btn-warning">
                                        <i className="fas fa-search" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

// NotFound404.propTypes = {

// }

export default NotFound404;