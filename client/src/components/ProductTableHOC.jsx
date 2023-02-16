import React, { Component } from 'react';
import Table from './Table';

const FETCH_URL = 'http://localhost:3001/get/product';

class UserTableHOC extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
        };
    }

    render = () => {
        return <Table products={this.state.products} />
    }

    componentDidMount(){
        this.fetchUserAPI();
    }

    fetchUserAPI = () => {
        this.setState({...this.state});
        fetch(FETCH_URL)    
        .then(response => {
                console.log(response.data);
                this.setState({products: response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState ({...this.state});
        });

    }
};

export default UserTableHOC;