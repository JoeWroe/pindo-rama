import React from 'react';
import {render, shallow} from "enzyme";

import HomepageButtons from './HomepageButtons'


describe('The Social Media Buttons Component', () => {
    it('renders OK', () => {
        const socialMediaButtonsComponent = shallow(<HomepageButtons/>)
        expect(socialMediaButtonsComponent.exists()).toEqual(true)
    })

    it('should contain three images for the social media sites', () => {
        const socialMediaButtonsComponent = render(<HomepageButtons/>)
        const socialMediaButtonsCompiledHtml = socialMediaButtonsComponent.html()

        expect(socialMediaButtonsCompiledHtml).toContain(
            '<img class="socialMediaImage" src="facebook.png" alt="Facebook">' +
            '<img class="socialMediaImage" src="instagram.png" alt="Instagram">' +
            '<img class="socialMediaImage" src="etsy.png" alt="Etsy">'
        )
    })
})