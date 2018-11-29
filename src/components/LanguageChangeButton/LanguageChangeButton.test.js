import React from 'react';
import { shallow } from "enzyme";

import LanguageChangeButton from './LanguageChangeButton'

describe('The Language Change Button Component', () => {
    it('renders OK', () => {
        const languageChangeButtonComponent = shallow(<LanguageChangeButton />)
        expect(languageChangeButtonComponent.exists()).toEqual(true)
    })

    it('renders with a social media image', () => {
        const languageChangeButtonComponent = shallow(<LanguageChangeButton />)
        const languageChangeButtonHtml = languageChangeButtonComponent.html()
        expect(languageChangeButtonHtml).toContain('<img class="languageChangeImage"/>')
    })
})