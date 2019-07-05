import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import axios from 'axios'
import Product from './components/Product/Product';

class App extends Component{
  constructor() {
    super()
    this.state = {
      product: [],
      i: 0
    };
    
  }
  componentDidMount() {
    axios
      .get('/api/inventory')
      .then(res => {
        console.log('res db response', res)
        this.setState({product: res.data})
      })

      .catch(err => console.log('err', err))
  }

  // updatedInventory = (updatedInventory, id) => {
  //   let { image, name, price } = updatedInventory
  //   axios
  //     // grab newRating off of controller
  //     .put(`/api/product/${id}`, { image, name, price })
  //     .then(res => {
  //       this.setState = ({ product: res.data })
  //     })
  // };


  render() {
    return (
       <div className="App">
         <div className='header'>
         <Header/>
         </div>
         <div className ='dash-form-container'>
         <Dashboard className='dash' product={this.state.product} i={this.state.i} updatedInventory={this.updatedInventory}/>
         <Form componentDidMount={this.componentDidMount} product={this.state.product}/>
         </div>
       </div>
     );
   }
 
}
 

export default App;
