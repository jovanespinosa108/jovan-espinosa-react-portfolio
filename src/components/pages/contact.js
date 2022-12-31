import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPagePicture from "../../../static/assets/images/bio/Office.jpg"


export default function() {
    return (
        <div className='content-page-wrapper'>
            <div 
                className='image-content'
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className='information-content'>
                <div className='contact-bullet-points'>
                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className='text'>333-22-254-6424</div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="location-dot" />
                        </div>

                        <div className='text'>Guadalajara, Jalisco, Mexico</div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className='text'>jovanespinosa108@gmail.com</div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="linkedin" />
                        </div>

                        <div className='text'>linkedin account</div>
                    </div>

                    <div className='bullet-point-group'>
                        <div className='icon'>
                            <FontAwesomeIcon icon="github" />
                        </div>

                        <div className='text'>Github account</div>
                    </div>    
                </div>
            </div>
        </div>
    );
}