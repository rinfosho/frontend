import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import Promotions from './Pages/Promotions'
import PriceList from './Pages/PriceList'
import Order from './Pages/Order'
import OrderConfirm from './Pages/OrderConfirm'
import CustomerSummary from './Pages/CustomerSummary'
import AllCustomer from './Pages/AllCustomer'
import AdminCustomer from './Pages/AdminCustomer'
import AdminProduct from './Pages/AdminProduct'
import AdminPromotion from './Pages/AdminPromotion'
import AdminSalesman from './Pages/AdminSalesman'
import ManagerPage from './Pages/ManagerPage';
import SalesmanPage from './Pages/SalesmanPage'
import OwnerPage from './Pages/OwnerPage';

function PageNotFound(){
    return <div>
        <h3> Page not found. </h3>
    </div>

}

export default class Routes extends Component {
    render() {
        return <Switch>
            <Route exact path = "/" component = {Dashboard}/>
            <Route path = "/create-order" component = {Order}/>
            <Route path = "/confirm-order" component = {OrderConfirm}/>
            <Route path = "/promotions" component = {Promotions}/>
            <Route path = "/price-list" component = {PriceList}/>
            <Route path = "/customer-summary" component = {CustomerSummary}/>
            <Route path = "/customers" component = {AllCustomer}/>
            <Route path = "/admin-add-customer" component = {AdminCustomer}/>
            <Route path = "/admin-add-product" component = {AdminProduct}/>
            <Route path = "/admin-add-promotion" component = {AdminPromotion}/>
            <Route path = "/admin-add-salesman" component = {AdminSalesman}/>
            <Route path = "/managers" component = {ManagerPage}/>
            <Route path = "/salesman-page" component = {SalesmanPage}/>
            <Route path = "/owner" component = {OwnerPage}/>




            <Route path = "*" component = {PageNotFound} />
        </Switch>
    }
}