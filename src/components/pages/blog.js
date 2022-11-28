import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default  class Rules extends Component {
   render() {
       return (
           <div>
                <h2>Blog</h2>

                <div>
                    <Link to="/about-me">Read More About Me</Link>
                </div>
           </div>
       );
    }
}