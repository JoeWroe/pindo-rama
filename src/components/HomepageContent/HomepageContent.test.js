import React from 'react';
import {render, shallow} from "enzyme";

import HomepageContent from './HomepageContent.js'


describe('The Homepage Content Component', () => {
    it('renders OK', () => {
        const homepageContentComponent = shallow(<HomepageContent />)
        expect(homepageContentComponent.exists()).toEqual(true)
    })

    it('displays the brand description', () => {
        const homepageContentComponent = render(<HomepageContent />)
        const hompageContentText = homepageContentComponent.text()
        expect(hompageContentText).toEqual(
            'Pindorama, palavra derivada do Tupi Guarani, \n' +
            'que significa “Terra livre dos males” \n' +
            'e/ou “Terra das Palmeiras”. \n' +
            'Assim era como os povos indígenas \n' +
            'chamavam o Brasil antesdo descobrimento. \n' +
            'Assim é como nós chamamos a marca onde \n' +
            'queremos trazer um pouco da memória brasileira \n' +
            'para aqueles que vivem longe de casa.'
        )
    })
})