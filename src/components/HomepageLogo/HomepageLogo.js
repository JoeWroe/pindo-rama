import React, {Component} from 'react';
import './HomepageLogo.scss'

import homepageLogo from '../../content/homepageLogo.png'

class HomepageLogo extends Component {

    render() {
        return (
            <div className='homepageLogo'>
                <img src={homepageLogo} alt='Pindo Rama' />
            </div>
        )
    }
}

export default HomepageLogo;
