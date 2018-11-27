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