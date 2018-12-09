import React from 'react'
import {mount, shallow, render} from 'enzyme'

import Homepage from './Homepage'

describe('The Homepage component', () => {
    let homepageComponent
    let homepageHtml

    beforeEach(() => {
        homepageComponent = mount(<Homepage/>)
        homepageHtml = homepageComponent.html()
    })

    it('should renders OK', () => {
        expect(homepageComponent.exists()).toEqual(true)
    })

    it('should contain a HomepageLogo', () => {
        expect(homepageHtml).toContain('<div class="homepageLogo">')
    })

    it('should contain the HomepageButtons', () => {
        expect(homepageHtml).toContain('<div class="homepageButtons">')
    })

    describe('when the language needs changing', () => {
        beforeEach(() => {
            homepageComponent.setState({language: 'brazilian'})
        })

        it('should be able to change the language from Brazilian to English', () => {
            homepageComponent.instance().setLanguage('english')

            expect(homepageComponent.state()).toEqual({language: 'english'})
        })
    })

    describe('when language is Brazilian', () => {
        beforeEach(() => {
            homepageComponent.setState({language: 'brazilian'})
            homepageHtml = homepageComponent.html()
        })

        it('should contain the Brazilian title and content', () => {
            expect(homepageHtml).toContain('CELEBRANDO O BRASIL &amp; SUAS BELEZAS')
            expect(homepageHtml).toContain('Pindorama, palavra derivada do Tupi Guarani,')
        })
    })

    describe('when language is English', () => {
        beforeEach(() => {
            homepageComponent.setState({language: 'english'})
            homepageHtml = homepageComponent.html()
        })

        it('should contain the English title and content', () => {
            expect(homepageHtml).toContain('CELEBRATING BRAZIL &amp; IT\'S BEAUTY')
            expect(homepageHtml).toContain('Pindorama, word derived from the Guarani Tupi,')
        })
    })
})