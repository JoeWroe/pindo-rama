import React from 'react';

import { socialMediaAssets } from '../../content/assets'

const SocialMediaButton = (props) => <img src={ socialMediaAssets[props.pathToIcon]} alt={props.altText}/>

export default SocialMediaButton;