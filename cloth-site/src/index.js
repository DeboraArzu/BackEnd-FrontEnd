import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Products from './components/Products/Products';
import About from './components/About/About';
import Home from './components/Home/Home';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={App} />
            <Route path={"/home"} component={Home} />
        </div>
        <div className="products"><Route path={"/Products"} component={Products} /></div>
        <div className="about"><Route path={"/About"} component={About} /></div>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
