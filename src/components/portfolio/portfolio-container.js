import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
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
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios
            .get('https://jovanespinosa.devcamp.space/portfolio/portfolio_items')
            .then(response => {  // handle success
                if (filter) {
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });
                } else {
                    this.setState({
                        data: response.data.portfolio_items
                    });
                }   
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
            <div className='homepage-wrapper'>
                <div className='filter-links'>
                    <button
                        className="btn" onClick={() => this.handleFilter("Enterprice")}
                    >
                        Enterprice
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Mentorship")}  //"Backoffice"
                    >
                        Mentorship
                    </button>

                    <button 
                        className="btn" onClick={() => this.handleFilter("Meals & food")} //Projects
                    >
                        Meals & food
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Technology")}
                    >
                        Technology
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Social Media")}
                    >
                        Social Media
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Shopping")}
                    >
                        Shopping
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Education")}
                    >
                        Education
                    </button>

                    <button
                        className="btn" onClick={() => this.handleFilter("Podcast")}
                    >
                        Podcast
                    </button>

                    <button 
                        className="btn" onClick={() => this.handleFilter("CLEAR_FILTERS")}
                    >
                        All
                    </button>
                </div>

                <div className="portfolio-items-wrapper">
                        {this.portfolioItems()}
                </div>

            </div>
        );
    }
}