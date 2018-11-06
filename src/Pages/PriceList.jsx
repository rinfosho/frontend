import React, {Component} from 'react'
import ProductList from '../Components/ProductList';
import BackNav from '../BackNav';

export default class PriceList extends Component {
    render() {
        return <div>
            <h3 className="title">Price List</h3>
            <ProductList/>
            <hr/>
            <BackNav/>
        </div>
    }
}