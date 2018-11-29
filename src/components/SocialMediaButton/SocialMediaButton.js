import React from 'react';
import './SocialMediaButton.scss'
import { socialMediaAssets } from '../../content/assets'

const SocialMediaButton = (props) => <img src={ socialMediaAssets[props.pathToIcon]} alt={props.altText}/>

export default SocialMediaButton;