import React from 'react';
import {shallow} from "enzyme";

import HomepageLogo from './HomepageLogo.js'

describe('The Homepage Logo Component', () => {
    it('renders OK', () => {
        const homepageLogoComponent = shallow(<HomepageLogo />)
        expect(homepageLogoComponent.exists()).toEqual(true)
    })

    it('renders with the homepage logo image', () => {
        const homepageLogoComponent = shallow(<HomepageLogo />)
        const homepageLogoHtml = homepageLogoComponent.html()
        expect(homepageLogoHtml).toContain('<img src="homepage-logo-390px-wide.png" alt="Pindo Rama"/>')
    })
})
