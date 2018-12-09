import React, {Component} from 'react';
import './HomepageButtons.scss'

import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import LanguageChangeButton from "../LanguageChangeButton/LanguageChangeButton";

class HomepageButtons extends Component {
    state = {
        language: ''
    }

    changeLanguage = (language) => {
        this.setState({
            language: language
        },
            () => this.props.setLanguage(this.state.language))
    }

    render() {
        return (
            <div className='socialMediaButtons'>
                <LanguageChangeButton pathToIcon={'brazilianIcon'}
                                      altText='Brazilian'
                                      switchLanguage={() => {this.changeLanguage('brazilian')}}/>
                <LanguageChangeButton pathToIcon={'englishIcon'}
                                      altText='English'
                                      switchLanguage={() => {this.changeLanguage('english')}}/>
                <span className='iconDivide'/>
                <SocialMediaButton pathToIcon={'facebookIcon'}
                                   altText='Facebook'
                                   redirectLink='https://www.facebook.com/pindoramaofficial/'/>
                <SocialMediaButton pathToIcon={'instagramIcon'}
                                   altText='Instagram'
                                   redirectLink='https://www.instagram.com/pindo.rama/'/>
                <SocialMediaButton pathToIcon={'etsyIcon'}
                                   altText='Etsy'
                                   redirectLink='https://www.etsy.com/uk/shop/Pindoramashop'/>
            </div>
        )
    }
}

export default HomepageButtons;