import React, {Component} from 'react';
import './SocialMediaButtons.scss'

import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import LanguageChangeButton from "../LanguageChangeButton/LanguageChangeButton";



class SocialMediaButtons extends Component {

    render() {
        return (
            <div className='socialMediaButtons'>
                <LanguageChangeButton pathToIcon={'brazilianIcon'}
                                      altText='Brazilian'
                                      language='Brazilian' />
                <LanguageChangeButton pathToIcon={'englishIcon'}
                                      altText='English'
                                      language='English' />
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

export default SocialMediaButtons;