import React, { Component } from 'react';
import 'bulma/css/bulma.min.css'
import Routes from "./Routes"
import Navbar from './Navbar'

export default class App extends Component{
  render(){
    return <section className = ' section'>
      <div className = 'container'>
      <div className = 'box'>
        <Navbar/>
        <hr/>
        <Routes/>
      </div>
      </div>    
    </section>
  }
}
