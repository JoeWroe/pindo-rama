import React from 'react';
import {shallow} from "enzyme";

import HomepageTitle from './HomepageTitle.js'


describe('The Homepage Title Component', () => {
    it('renders OK', () => {
        const homepageTitleComponent = shallow(<HomepageTitle/>)
        expect(homepageTitleComponent.exists()).toEqual(true)
    })
})