import React from 'react';
import {shallow} from "enzyme";

import HomepageLogo from './HomepageLogo.js'


describe('The Homepage Logo Component', () => {
    it('renders OK', () => {
        const homepageLogoComponent = shallow(<HomepageLogo />)
        expect(homepageLogoComponent.exists()).toEqual(true)
    })

    it('renders with an image', () => {
        const homepageLogoComponent = shallow(<HomepageLogo />)
        expect(homepageLogoComponent.contains(<img />)).toEqual(true)
    })
})
