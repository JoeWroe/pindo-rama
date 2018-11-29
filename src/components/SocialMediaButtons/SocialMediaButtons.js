import React, {Component} from 'react';
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";

class SocialMediaButtons extends Component {

    render() {
        return (
            <div className='socialMediaButtons'>
                <SocialMediaButton pathToIcon={'etsyIcon'} altText='Etsy' />
                <SocialMediaButton pathToIcon={'facebookIcon'} altText='Facebook' />
                <SocialMediaButton pathToIcon={'instagramIcon'} altText='Instagram' />
            </div>
        )
    }
}

export default SocialMediaButtons;