import React, { Component } from 'react';
import './ProductList.css';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('/home/products')
      .then(res => res.json())
      .then(products => this.setState({ products }, () => console.log('products fetched...', products)));
  }

  render() {
    return (
      <div>
        <ul>
          {/* {this.state.products.map((product, index) => <li key={product.codigo}>{product.name}</li>)} */}
        </ul>
      </div>
    );
  }
}

export default ProductList;