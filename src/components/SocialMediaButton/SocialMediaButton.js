import React, { Component } from 'react';
import './SocialMediaButton.scss'
import { socialMediaAssets } from '../../content/assets'

class SocialMediaButton extends Component {

    redirectLink = this.props.redirectLink

    redirectTo = (event) => {
        window.location.href = this.redirectLink
    }

    render() {
        return (
            <img src={ socialMediaAssets[this.props.pathToIcon] }
                 alt={ this.props.altText }
                 onClick={ this.redirectTo } />
        )
    }
}

export default SocialMediaButton;