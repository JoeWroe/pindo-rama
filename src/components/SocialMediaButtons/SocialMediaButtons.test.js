import React from 'react';
import {shallow, render} from "enzyme";

import SocialMediaButtons from './SocialMediaButtons'


describe('The Social Media Buttons Component', () => {
    it('renders OK', () => {
        const socialMediaButtonsComponent = shallow(<SocialMediaButtons />)
        expect(socialMediaButtonsComponent.exists()).toEqual(true)
    })

    it('should contain three images for the social media sites', () => {
        const socialMediaButtonsComponent = render(<SocialMediaButtons />)
        const socialMediaButtonsCompiledHtml = socialMediaButtonsComponent.html()
        console.log(socialMediaButtonsCompiledHtml)
        expect(socialMediaButtonsCompiledHtml).toEqual(
            "<img src=\"etsy.png\" alt=\"Etsy\">" +
            "<img src=\"facebook.png\" alt=\"Facebook\">" +
            "<img src=\"instagram.png\" alt=\"Instagram\">"
        )
    })
})