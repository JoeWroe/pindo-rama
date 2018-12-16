import React, {Component} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import languages from '../../data/languages'
import './Homepage.scss'

import HomepageButtons from "../HomepageButtons/HomepageButtons";
import HomepageLogo from "../HomepageLogo/HomepageLogo";
import HomepageText from "../HomepageText/HomepageText";

class Homepage extends Component {
    state = {
        language: languages.brazilian
    }

    setLanguage = (language) => {
        this.setState({language: languages[language]})
    }

    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={1500} classNames='fade'>
                <div className="homepage">
                    <HomepageLogo/>
                    <TransitionGroup className='homepage-content-container'>
                        <CSSTransition key={this.state.language.key} timeout={500} classNames='fade'>
                            <HomepageText language={this.state.language}/>
                        </CSSTransition>
                    </TransitionGroup>
                    <HomepageButtons setLanguage={this.setLanguage}/>
                </div>
            </CSSTransition>
        )
    }
}

export default Homepage
