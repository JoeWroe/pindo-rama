import React from 'react';
import './HomepageLogo.scss'

import homepageLogo from '../../content/homepageLogos/homepage-logo-390px-wide.png'

const HomepageLogo = () => {
    return (
        <div className='homepageLogo'>
            <img src={homepageLogo} alt='Pindo Rama' />
        </div>
    )
}

export default HomepageLogo;
