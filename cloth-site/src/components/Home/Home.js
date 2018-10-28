import React, { Component } from 'react';
import shopping from '../img/shopping.jpg';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <p>Welcome!</p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={shopping} alt={"shopping"} width='80%' />
                </div>
            </div>
        );
    }
}
export default Home;