import React, { Component } from 'react'
import axios from 'axios'

export default class PortfolioForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "Enterprice",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);

        debugger;

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(
            "https://jovanespinosa.devcamp.space/portfolio/portfolio_items",
             this.buildForm(),
             { withCredentials: true }
             )
             .then(response => {
                this.props.handleSuccessfulFormSubmission(response.data.porfolio_item);
             })
             .catch(error => {
                console.log("portfolio form handleSubmit", error);
             })
        
        event.preventDefault();
    }

   render() {
      return (
          <div>
              <h1>Portfolio form...</h1>

              <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                    />
                </div>
                
                <div>
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={this.state.position}
                        onChange={this.handleChange}
                    />

                    <select
                        name="category"
                        value={this.state.category}
                        onChange={this.handleChange}
                    >
                        <option value="Technology">Technology</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Education">Education</option>
                        <option value="Podcast">Podcast</option>
                        <option value="Mentorship">Mentorship</option>
                        <option value="Meals and Food">Meals & Food</option>
                        <option value="Enterprice">Enterprice</option>
                        <option value="ECommerce">eCommerce</option>
                        <option value="Scheduling">Scheduling</option>
                        <option value="Demo">Demo</option>
                    </select>
                </div>

                <div>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <button type='submit'>Save</button>
                </div>
              </form>
          </div>
      );
    }
}