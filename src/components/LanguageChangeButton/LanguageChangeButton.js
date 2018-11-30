import React, { Component } from 'react';
// import './LanguageChangeButton.scss' TODO: sort out SCSS and class naming for this component.
import { languageChangeAssets } from '../../content/assets'

class LanguageChangeButton extends Component {
    render() {
        return (
            <img className='languageChangeImage'
                 src={ languageChangeAssets[this.props.pathToIcon] }
                 alt={ this.props.altText }
                 onClick={ this.props.languageHandler } />
        )
    }
}

export default LanguageChangeButton;