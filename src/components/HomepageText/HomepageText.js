import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './HomepageText.scss'

const HomepageText = ({language}) => {
    return (
        <TransitionGroup className='homepage-content-container'>
            <CSSTransition key={language.id} timeout={500} classNames='fade'>
                <div className="homepageText">
                    <div className='homepageTitle'>
                        <h1>{language.header}</h1>
                    </div>
                    <div className='homepageContent'>
                        {language.content.map(line => <p>{line}</p>)}
                    </div>
                </div>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default HomepageText
