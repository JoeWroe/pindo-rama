import React from 'react';
import {render, shallow} from "enzyme";

import BrazilianHomepageContent from './HomepageContent.brazilian.js'


describe('The Homepage Content Component', () => {
    it('renders OK', () => {
        const homepageContentComponent = shallow(<BrazilianHomepageContent />)
        expect(homepageContentComponent.exists()).toEqual(true)
    })

    it('displays the brand description', () => {
        const homepageContentComponent = render(<BrazilianHomepageContent />)
        const hompageContentText = homepageContentComponent.text()
        expect(hompageContentText).toEqual(
            'Pindorama, palavra derivada do Tupi Guarani, ' +
            'que significa “Terra livre dos males” ' +
            'e/ou “Terra das Palmeiras”. ' +
            'Assim era como os povos indígenas ' +
            'chamavam o Brasil antesdo descobrimento. ' +
            'Assim é como nós chamamos a marca onde ' +
            'queremos trazer um pouco da memória brasileira ' +
            'para aqueles que vivem longe de casa. '
        )
    })
})