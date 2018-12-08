import React from 'react';
import {shallow, render} from "enzyme";

import HomepageTitleBrazilian from './HomepageTitle.brazilian.js'


describe('The Homepage Title Component', () => {
    it('renders OK', () => {
        const homepageTitleComponent = shallow(<HomepageTitleBrazilian />)
        expect(homepageTitleComponent.exists()).toEqual(true)
    })

    it('welcomes visitors with a friendly title', () => {
        const homepageTitleComponent = render(<HomepageTitleBrazilian />)
        const hompageTitleText = homepageTitleComponent.text()
        expect(hompageTitleText).toEqual('CELEBRANDO O BRASIL & SUAS BELEZAS')
    })
})