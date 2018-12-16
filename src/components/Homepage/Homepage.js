import React, {Component} from 'react'
import {CSSTransition} from 'react-transition-group'

import './Homepage.scss'

import BrazilianHomepageContent from "../HomepageContent/HomepageContent.brazilian";
import BrazilianHomepageTitle from "../HomepageTitle/HomepageTitle.brazilian";
import EnglishHomepageContent from "../HomepageContent/HomepageContent.english";
import EnglishHomepageTitle from "../HomepageTitle/HomepageTitle.english";
import HomepageButtons from "../HomepageButtons/HomepageButtons";
import HomepageLogo from "../HomepageLogo/HomepageLogo";

class Homepage extends Component {
    state = {
        language: 'brazilian'
    }

    setLanguage = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={1500} classNames='fade'>
                <div className="homepage">
                    <HomepageLogo/>
                    {(this.state.language === 'brazilian') ?
                        <BrazilianHomepageTitle/> :
                        <EnglishHomepageTitle/>}
                    {(this.state.language === 'brazilian') ?
                        <BrazilianHomepageContent/> :
                        <EnglishHomepageContent/>}
                    <HomepageButtons setLanguage={this.setLanguage}/>
                </div>
            </CSSTransition>
        )
    }
}

export default Homepage
