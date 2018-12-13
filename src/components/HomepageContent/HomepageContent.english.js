import React, {Component} from 'react';
import './HomepageContent.scss'

class EnglishHomepageContent extends Component {
    componentClasses = ['homepageContent']

    componentWillMount = () => {
        this.componentClasses.push('show')
    }

    componentWillUnmount() {
        this.componentClasses.splice(this.componentClasses.indexOf('show'), 1)
    }

    render () {
        return (
            <div className={this.componentClasses.join(' ')}>
                <p>Pindorama, word derived from the Guarani Tupi, </p>
                <p>which means “Land free from evil” </p>
                <p>and / or “Terra das Palmeiras”. </p>
                <p>This was how the indigenous peoples </p>
                <p>called Brazil before its discovery. </p>
                <br/>
                <p>This is how we call the brand where we </p>
                <p>want to bring some of the Brazilian culture, </p>
                <p>beauty and history. </p>
            </div>
        )
    }
}

export default EnglishHomepageContent;