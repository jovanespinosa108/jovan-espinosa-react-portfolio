import axios from 'axios';
import React, { Component } from 'react'

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor () {
        super();

        this.state = {
            portfolioItems: []
        };

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleformSubmissionError =this.handleformSubmissionError.bind(this);
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleformSubmissionError(error) {
        console.log("handleformSubmissionError error", error);
    }

    getPortfolioItems() {
        axios
            .get("https://jovanespinosa.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { 
            withCredentials: true 
            })
            .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
            })
            .catch(error => {
            console.log("error in getPortfolioItems", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
   render() {
      return (
          <div className='portfolio-manager-wrapper'>
            <div className='left-colum'>
                <PortfolioForm
                    handleSuccessfulFormSubmission = {this.handleSuccessfulFormSubmission}
                    handleformSubmissionError = {this.handleformSubmissionError}
                />
            </div>

            <div className='right-column'>
                <PortfolioSidebarList data={this.state.portfolioItems} />
            </div>
              
          </div>
      );
    }
}