import React from 'react';

import './SocialMediaButton.scss'
import {socialMediaAssets} from '../../content/assets'

const SocialMediaButton = (props) => {
    const {altText, pathToIcon, redirectLink} = props

    const redirect = () => {window.location.href = redirectLink}

        return (
            <img className='socialMediaImage'
                 src={socialMediaAssets[pathToIcon]}
                 alt={altText}
                 onClick={redirect}/>
        )
}

export default SocialMediaButton;