import React, { Component } from 'react';
import './SocialMediaButton.scss'
import { socialMediaAssets } from '../../content/assets'

class SocialMediaButton extends Component {

    redirectLink = this.props.redirectLink

    redirect = (event) => {
        window.location.href = this.redirectLink
    }

    render() {
        return (
            <img className='socialMediaImage'
                 src={ socialMediaAssets[this.props.pathToIcon] }
                 alt={ this.props.altText }
                 onClick={ this.redirect } />
        )
    }
}

export default SocialMediaButton;