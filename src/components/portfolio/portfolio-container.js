import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioComponent extends Component {
    constructor() {
        super();

        this.state = { 
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://jovanespinosa.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        this.setState({
            data: response.data.portfolio_items
        })
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem key= {item.id} item={item} />;
            //return <h3>{item}</h3>;
        });
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (   
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter("Backoffice")}>Backoffice</button>
                <button className="btn" onClick={() => this.handleFilter("Sales")}>Sales</button>
                <button className="btn" onClick={() => this.handleFilter("Production")}>Production</button>
                {this.portfolioItems()}
            </div>
        )
    }
}