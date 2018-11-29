import React, {Component} from 'react';
import './SocialMediaButtons.scss'

import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";



class SocialMediaButtons extends Component {

    render() {
        return (
            <div className='socialMediaButtons'>
                <SocialMediaButton pathToIcon={'facebookIcon'} altText='Facebook' />
                <SocialMediaButton pathToIcon={'instagramIcon'} altText='Instagram' />
                <SocialMediaButton pathToIcon={'etsyIcon'} altText='Etsy' />
            </div>
        )
    }
}

export default SocialMediaButtons;