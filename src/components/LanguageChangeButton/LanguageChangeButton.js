import React, { Component } from 'react';
import { languageChangeAssets } from '../../content/assets'

class LanguageChangeButton extends Component {
    render() {
        return (
            <img className='languageChangeImage'
                 src={ languageChangeAssets[this.props.pathToIcon] }
                 alt={ this.props.altText }
                 onClick={ this.props.switchLanguage } />
        )
    }
}

export default LanguageChangeButton;