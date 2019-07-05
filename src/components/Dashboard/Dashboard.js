import Product from '../Product/Product'
import React, { Component } from 'react'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state =
            { inventory: [] }
    };

    componentDidUpdate(prevProps, prevState) {
      
        if (prevProps.product !== this.state.inventory) {
            this.setState({
                inventory: this.props.product
            })
            this.render()
        }
         
       
    }


    render() {
        console.log(this.state.inventory)
        const mappedInventory = this.state.inventory.length ? this.state.inventory.map(product => {
            return <Product product={product} key={product.id} updateInventory={this.props.updateInventory}/> }) : console.log('test false')



        return (
            <div className="dash">Dashboard
                 <div className='dash-products'>{mappedInventory}</div>
            </div>
        )
    }

}

export default Dashboard