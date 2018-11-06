import React, {Component} from 'react'
import Navbar from '../Navbar'

export default class Dashboard extends Component {
    render() {
        return <div>
            <h1 className="title is-1">Your summary</h1>
            <h2 className="title is-4">Your commision:</h2>
            <h2 className="title is-4">Monthly sales target:</h2>
            <h2 className="title is-4">New notifications</h2>
            <h2 className="title is-4">Delivery due dates</h2>

        </div>
    }
}