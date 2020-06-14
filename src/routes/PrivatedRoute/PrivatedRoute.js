import React from 'react'
// import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { adjustTemplateClass } from '../PublicRoute/PublicRoute'

const PrivatedRoute = ({component:Component, isLogged, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={(props)=>{
                adjustTemplateClass();
                // const {  }= rest;
                // const bodyPage = document.querySelector('#bodyPage');

                // console.log('bodyPage');
                // console.log(bodyPage);

                // if (!bodyPage.classList.contains('layout-top-nav')) {
                //     // bodyPage.classList.add('layout-top-nav');
                //     // bodyPage.classList.remove('layout-top-nav')
                //     // bodyPage.classList.add('sidebar-mini');
                // }
                
                // // console.log(bodyPage.classList.contains('sidebar-mini'));
                // console.log(bodyPage.classList.contains('layout-top-nav'));
                
                // console.log('bodyPage');

                if(true){
                    return <Component {...props} />
                }
            }}
        />
    )
}

// PrivatedRoute.propTypes = {

// }

export default PrivatedRoute
