import React, { Fragment, Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://etanee.id/static/media/enatee-logo-new68px.88b882ea.svg" alt="etanee logo"/>
                    </div>
                    <div className="troley">
                        <img src="https://etanee.id/static/media/briefcase.094bb9d3.svg" alt="basket"/>
                        <div className="count">3</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/ayam/Ayam+Berbumbu+5+Potong.jpg" alt="ayam"/>
                    </div>
                    <p className="product-title">Paket Daging Ayam</p>
                    <p className="product-price">Rp. 43, 000</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input className="text-count" type="text" value={3}/>
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;
