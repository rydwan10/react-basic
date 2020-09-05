import React, { Component } from 'react';
import YoutubeComponent from "../components/YoutubeComponent/YoutubeComponent";
import Product from "../components/ProductComponent/Product";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Youtube component</p>
                <YoutubeComponent time="12.22"/>
                <YoutubeComponent time="12.00"/>
                <YoutubeComponent time="9.00"/>
                <YoutubeComponent time="3.21"/>
                <YoutubeComponent time="2.01"/>
                <YoutubeComponent time="90.00"/>
                <YoutubeComponent />
                <br/>
                <hr/>
                <p>Card component</p>
                <Product/>
            </React.Fragment>
        )
    }
}

export default Home;
