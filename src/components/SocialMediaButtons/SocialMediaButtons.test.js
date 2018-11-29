import React from 'react';
import {shallow} from "enzyme";

import SocialMediaButtons from './SocialMediaButtons'


describe('The Social Media Buttons Component', () => {
    it('renders OK', () => {
        const socialMediaButtonsComponent = shallow(<SocialMediaButtons />)
        expect(socialMediaButtonsComponent.exists()).toEqual(true)
    })
})