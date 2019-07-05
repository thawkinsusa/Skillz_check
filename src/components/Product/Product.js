import React, { Component } from 'react'

class Product extends Component {
    constructor(props){
        super(props)
        this.state ={
            editing: false,
            image: this.props.product.image,
            name: this.props.product.name,
            price: this.props.product.price
        }
    }

    edit = () => {
        this.setState({editing: !this.state.editing})
    }

    saveChanges = () => {
        let {image, name, price}= this.state
        let updateInventory= {
            image: image,
            name: name,
            price: price
        }
        this.props.updateInventory(updateInventory, this.props.product[this.props.i].id)
    }
    
    handleChange = e => {
        let {name, value} = e.target
        this.setState({[name]: value})
    
    };

    render() {
        let {product}=this.props
        let {editing}=this.state
        return (
            <div>
            {/* {editing
            ?
            <div>
                <input value={product.image} onChange={this.handle.change} name='image'/>
                <input value={product.name} onChange={this.handle.change} name='name'/>
                <input value={product.price} onChange={this.handle.change} name='price'/>

            </div>
            
            :
            <div>
                <p>image:url{this.props.products[0] && this.props.product[this.props.i].image}</p>
                <p>image:url{this.props.products[0] && this.props.product[this.props.i].name}</p>
                <p>image:url{this.props.products[0] && this.props.product[this.props.i].price}</p>
            </div>
            } */}
            {this.props.product.name}
            {this.props.product.image}
            {this.props.product.price}
             <button>cancel</button>
            {/* // {editing
            ?
            <button onClick={this.saveChanges}>save changes</button>
            :
            (<button onClick={this.edit}>Update</button>)} */}
            </div>

        )
    }
}

export default Product