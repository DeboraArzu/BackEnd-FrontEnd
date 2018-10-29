import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Products.css';
import ProductList from './ProductList'

class Products extends Component {
    //estado de la forma para NewComponent
    state = {
        newForm: false,
    };
    //show new product form
    NewButtontoggler() {
        this.setState({
            newForm: !this.setState.newForm
        })
    }
    //hide new product form
    Hide() {
        this.setState({
            newForm: false
        })

    }
    Create = (event) => {
        event.preventDefault();
        let codigo = this.refs.Codigo.value;
        let name = this.refs.Name.value;
        let cost = this.refs.Cost.value;
        let size = this.refs.Size.value;
        let color = this.refs.Color.value;

        let info = {
            codigo: codigo,
            name: name,
            cost: cost,
            size: size,
            color: color
        };
        console.log(JSON.stringify(info));

        this.refs.NewProductForm.reset();
    };
    Edit = () => {
    };
    DeleteMethod = () => {

    };
    render() {
        return (
            <html>
                <Table className="table">
                    <thead>
                        <tr className="header">
                            <th>#</th>
                            <th>Codigo</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Size</th>
                            <th>Color</th>
                        </tr>
                    </thead>
                    <tbody className="content">
                        <tr>
                            <ProductList/>
                            <Button className="ButtonEdit" onClick={this.Edit()}>Edit</Button>
                            <Button className="ButtonDelete" onClick={this.DeleteMethod()}>Delete</Button>
                        </tr>
                    </tbody>
                </Table>
                {
                    //show new product form
                    this.state.newForm ?
                        <form ref="NewProductForm" method="POST" action="/home/create">
                            <div className="NewComponent">
                                <div className="form-group row">
                                    <label for="codigo-input" className="col-2 col-form-label">Codigo</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Codigo" ref="Codigo"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="codigo-input" className="col-2 col-form-label">Name</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Name" ref="Name"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="codigo-input" className="col-2 col-form-label">Cost</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Cost" ref="Cost"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="codigo-input" className="col-2 col-form-label">Size</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Size" ref="Size"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="codigo-input" className="col-2 col-form-label">Color</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Color" ref="Color"></input>
                                    </div>
                                </div>
                            </div>
                            <Button className="ButtonEdit" onClick={this.Create}>Save</Button>
                            <Button className="ButtonDelete" onClick={() => this.Hide()}>Cancel</Button>
                        </form>
                        : null
                }
                <Button className="ButtonNew" onClick={() => this.NewButtontoggler()}>New</Button>
            </html>
        )
    }
}
export default Products;