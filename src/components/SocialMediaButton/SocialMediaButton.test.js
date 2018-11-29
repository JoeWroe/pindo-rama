import React from 'react';
import {shallow} from "enzyme";

import SocialMediaButton from './SocialMediaButton'

describe('The Social Media Button Component', () => {
    it('renders OK', () => {
        const socialMediaButtonComponent = shallow(<SocialMediaButton />)
        expect(socialMediaButtonComponent.exists()).toEqual(true)
    })

    it('renders with an image', () => {
        const socialMediaButtonComponent = shallow(<SocialMediaButton />)
        expect(socialMediaButtonComponent.contains(<img />)).toEqual(true)
    })
})