import React from 'react';
import {shallow} from "enzyme";

import HomepageContent from './HomepageContent.js'


describe('The Homepage Content Component', () => {
    it('renders OK', () => {
        const homepageContentComponent = shallow(<HomepageContent />)
        expect(homepageContentComponent.exists()).toEqual(true)
    })
})