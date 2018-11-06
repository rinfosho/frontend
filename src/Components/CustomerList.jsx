import React, {Component} from 'react'
import axios from 'axios'

export default class CustomerList extends Component {
    state = {
        customers: []
    }

    render (){
        const {customers} = this.state

        return <div>

            <input type="text" className="input" placeholder = "Search Customer"/>
            <p className="control" style = {{marginTop: '15px'}}>
                <button onClick = {this.getCustomers.bind(this)} className="button is-primary">Search</button>
            </p>
            <hr/>
            <table className="table">
                <tbody>
                    {customers.map(each => {
                        return <tr key = {each.id}>
                            <td> {each.name} </td>
                            <td> {each.email}</td>
                            <td> <button className="button">Select</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }

    async getCustomers() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        const customers = resp.data

        this.setState({
            customers : customers
        })
    }
}