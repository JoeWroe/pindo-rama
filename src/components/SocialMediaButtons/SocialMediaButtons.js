import React, {Component} from 'react';
import './SocialMediaButtons.scss'

import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";



class SocialMediaButtons extends Component {

    render() {
        return (
            <div className='socialMediaButtons'>
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