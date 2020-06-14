import React from 'react'
// import PropTypes from 'prop-types'
import { Route, //Redirect 

} from 'react-router-dom'
import GlobalHelpers from '../../helpers/helpers';

const helpers = new GlobalHelpers();

// const routeClasses = [{
//     url:"/sign-in", addClass:'hold-transition login-page', removeClass:'',
// }]
export const adjustTemplateClass = () =>{
    if (!helpers.localStorageSync('__wua', 'get', null, 'decode')) {
        const bodyPage = document.querySelector('#top');
        if (!bodyPage.classList.contains('layout-top-nav')) {
            bodyPage.classList.remove('hold-transition', 'sidebar-mini', 'layout-navbar-fixed', 'layout-footer-fixed', 'sidebar-collapse');
            bodyPage.classList.add('hold-transition', 'layout-top-nav')
        }else{
            bodyPage.classList.remove('hold-transition', 'layout-top-nav');
            bodyPage.classList.add('hold-transition', 'sidebar-mini', 'layout-navbar-fixed', 'layout-footer-fixed', 'sidebar-collapse')
        }
    }
}
const PublicRoute = ({component:Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={(props)=>{
                console.log('public routessss');
                // const {  }= rest;
                adjustTemplateClass()
                    

                // const getClassElement = routeClasses.find(el=>{
                //     if (el.url === rest.path) {
                //         bodyPage.removeAttribute('class');
                //         bodyPage.setAttribute('class', el.addClass);
                //         // const mainAside = document.querySelector('#main-sidebar').style.display ='none'
                //         // document.getElementById("main-sidebar").style.display = "none";
                //     }

                //     return el;
                // })
                // console.log(bodyPage);
                // hold-transition layout-top-nav

                // if (bodyPage.classList.contains('layout-top-nav')) {
                //     // bodyPage.classList.remove('layout-top-nav');
                //     // bodyPage.classList.add('sidebar-mini', 'layout-navbar-fixed', 'layout-footer-fixed', 'sidebar-collapse');

                //     //sidebar-mini layout-navbar-fixed layout-footer-fixed sidebar-collapse
                //     // bodyPage.classList.add('layout-top-nav');
                // }
                
                // console.log(bodyPage.classList.contains('sidebar-mini'));
                // console.log(bodyPage.classList.contains('layout-top-nav'));
                
                console.log('public routessss');
                
                return <Component {...props} />
            }}
        />
    )
}

// PublicRoute.propTypes = {

// }

export default PublicRoute;
