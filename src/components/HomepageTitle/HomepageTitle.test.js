import React from 'react';
import {shallow, render} from "enzyme";

import HomepageTitle from './HomepageTitle.js'


describe('The Homepage Title Component', () => {
    it('renders OK', () => {
        const homepageTitleComponent = shallow(<HomepageTitle />)
        expect(homepageTitleComponent.exists()).toEqual(true)
    })

    it('welcomes visitors with a friendly title', () => {
        const homepageTitleComponent = render(<HomepageTitle />)
        const hompageTitleText = homepageTitleComponent.text()
        expect(hompageTitleText).toEqual('CELEBRANDO O BRASIL & SUAS BELEZAS')
    })
})