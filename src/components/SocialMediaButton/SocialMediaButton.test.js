import React from 'react';
import { shallow } from "enzyme";

import SocialMediaButton from './SocialMediaButton'

describe('The Social Media Button Component', () => {
    it('renders OK', () => {
        const socialMediaButtonComponent = shallow(<SocialMediaButton />)
        expect(socialMediaButtonComponent.exists()).toEqual(true)
    })

    it('renders with a social media image', () => {
        const socialMediaButtonComponent = shallow(<SocialMediaButton />)
        const socialMediaButtonHtml = socialMediaButtonComponent.html()
        expect(socialMediaButtonHtml).toContain('<img class="socialMediaImage"/>')
    })
})