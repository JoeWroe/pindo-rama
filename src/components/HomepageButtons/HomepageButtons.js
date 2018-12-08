import React, {Component} from 'react';
import './HomepageButtons.scss'

import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import LanguageChangeButton from "../LanguageChangeButton/LanguageChangeButton";



class HomepageButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { language: this.props.language };
    }

    setToBrazilian = (e) => {
        e.preventDefault()
        this.setState({
            language: "brazilian"
        })
    }

    setToEnglish = (e) => {
        e.preventDefault()
        this.setState({
            language: "english"
        })
    }

    render() {
        return (
            <div className='socialMediaButtons'>
                <LanguageChangeButton pathToIcon={'brazilianIcon'}
                                      altText='Brazilian'
                                      languageHandler={ this.setToBrazilian } />
                <LanguageChangeButton pathToIcon={'englishIcon'}
                                      altText='English'
                                      languageHandler={ this.setToEnglish } />
                <span className='iconDivide' />
                <SocialMediaButton pathToIcon={'facebookIcon'}
                                   altText='Facebook'
                                   redirectLink='https://www.facebook.com/pindoramaofficial/' />
                <SocialMediaButton pathToIcon={'instagramIcon'}
                                   altText='Instagram'
                                   redirectLink='https://www.instagram.com/pindo.rama/' />
                <SocialMediaButton pathToIcon={'etsyIcon'}
                                   altText='Etsy'
                                   redirectLink='https://www.etsy.com/uk/shop/Pindoramashop' />
            </div>
        )
    }
}

export default HomepageButtons;