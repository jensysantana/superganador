import React from 'react'
// import TesterMaterial from '../../../../tester-components/tester-material'
import { Switch } from "react-router-dom";
import ListItems from '../../../views/ListItems/ListItems';
import Home from '../../../views/Home/Home';
import UserProfile from '../../../views/UserProfile/UserProfile';
import PrivatedRoute from '../../../../routes/PrivatedRoute/PrivatedRoute';
import PublicRoute from '../../../../routes/PublicRoute/PublicRoute';
import NotFound404 from '../../../views/404/404';
import InternarServer500 from '../../../views/500/500';
import Invoice from '../../../views/Invoice/Invoice';
import ProductDetails from '../../../views/ProductDetails/ProductDetails';
import InvoicePrint from '../../../views/InvoicePrint/InvoicePrint';
import RunRaffleBasket from '../../../views/RunRaffleBasket/RunRaffleBasket';
import CreateItem from '../../../views/CreateItem/CreateItem';
import TestComponent from '../../../../test-component/TestComponent';
// import GlobalHelpers from '../../../../helpers/helpers';
// const helpers = new GlobalHelpers();
// {helpers.localStorageSync('__wua', 'get', null, 'decode') &&}

const Content = (props) => {
    return (
        <div className="wrapper">
            <div className="content-wrapper" style={{backgroundColor:'#fff'}}>
                <section className="container-fluid">
                    <Switch>
                        <PublicRoute exact path="/" component={Home} />
                        <PublicRoute exact path="/home" component={Home} />
                        <PublicRoute exact path="/products" component={ListItems} />

                        <PrivatedRoute exact path="/user-profile" component={UserProfile} />
                        <PrivatedRoute exact path="/run-raffle-basket" component={RunRaffleBasket} />

                        <PrivatedRoute path="/invoice" component={Invoice} />
                        <PrivatedRoute path="/invoice-print/:id" component={InvoicePrint} />
                        <PublicRoute path="/product-details/:id" component={ProductDetails} />
                        <PublicRoute path="/create-product" component={CreateItem} />

                        <PublicRoute path="/internal500" component={InternarServer500} />
                        <PublicRoute path="/test" component={TestComponent} />
                        <PublicRoute path="*" component={NotFound404} />
                    </Switch>
                </section>
            </div>
        </div>
    )
}

export default Content;
    