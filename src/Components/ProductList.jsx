import React, {Component} from 'react'
import axios from 'axios'

export default class ProductList extends Component {
    state = {
        products: []
    }

    render (){
        const {products} = this.state

        return <div>

            <hr/>
            <table className="table">
                <tbody>
                    {products.map(each => {
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

    async componentDidMount() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        const products = resp.data

        this.setState({
            products : products
        })
    }
}