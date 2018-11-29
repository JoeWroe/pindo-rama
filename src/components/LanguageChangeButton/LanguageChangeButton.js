import React, { Component } from 'react';
// import './LanguageChangeButton.scss'
import { languageChangeAssets } from '../../content/assets'

class LanguageChangeButton extends Component {

    language = this.props.language

    changeLanguage = (event) => {
        // window.location.href = this.redirectLink
    }

    render() {
        return (
            <img className='languageChangeImage'
                 src={ languageChangeAssets[this.props.pathToIcon] }
                 alt={ this.props.altText }
                 onClick={ this.changeLanguage } />
        )
    }
}

export default LanguageChangeButton;