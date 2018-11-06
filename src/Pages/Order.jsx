import React, {Component} from 'react'
import CustomerList from '../Components/CustomerList'
import ProductList from '../Components/ProductList'

export default class Order extends Component {
    state = {
        mode: 0
    }


    render() {

        const {mode} = this.state
        const modeCaption = mode === 0 ? 'Select Product' : 'Select Customer'
        return <div>
            <h3 className="title">Order</h3>
            <p className="control" style = {{marginBottom: '15px'}}>
                 <button onClick = {this.toggleMode.bind(this)} className="button">{modeCaption}</button>
            </p>

            {this.state.mode === 0 ? <CustomerList/> : <ProductList/>}
            
        </div>
    }

    toggleMode(){
        const newMode = this.state.mode === 0 ? 1 : 0
        this.setState({
            mode: newMode
        })
    }
}