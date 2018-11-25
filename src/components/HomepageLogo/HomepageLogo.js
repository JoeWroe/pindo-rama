import React, {Component} from 'react';

import homepageLogo from '../../content/homepageLogo.png'

class HomepageLogo extends Component {
    state = {
        loaded: true
    }

    render() {
        return (
            <div className='homepageLogo'>
                <img src={homepageLogo} alt='Pindo Rama' />
            </div>
        )
    }
}

export default HomepageLogo;
