    
import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            image: '',
            name: '',
            price: 0
        }
    }

    createProduct = () => {
        let {image, name, price } = this.state
        axios.post('/api/product', {image, name, price})
        .then(res => {
            this.setState=({product:res.data})
        })
    }
    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    };
    

    render(){
        console.log('logging of product in form', this.props.product);
    return (<div className="form">
  <div className="form">
      <div className='image-container'>
  <img src='' alt=''/>
        </div>
        <div className='input'>
        <input  onChange={this.handleChange} className='form-products' name='image'/>
        <input  onChange={this.handleChange} className='form-products' name='name'/>
        <input  onChange={this.handleChange} className='form-products' name='price'/>
        </div>
        <div className='buttons'>
        <button>cancel</button>
        <button onClick={this.createProduct}>add to inventory</button>
        </div>
        </div>
        
    </div>
    )
    }
}

export default Form