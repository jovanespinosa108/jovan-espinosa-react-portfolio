import React, { Component } from 'react';
import profilePicture from "../../../static/assets/images/bio/Devo.jpg"

export default class Rules extends Component {
   render() {
       return (
           <div className='content-page-wrapper'>
                <div 
                    className='image-content'
                    style={{
                        background: "url(" + profilePicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
                

                <div className='information-content'>
                    Here goes content
                    
                    50
                    lorem50
                
                    more lorem50 lorem/50
                    lorem50
                    LOREM
                </div>
           </div>
       );
    }
}