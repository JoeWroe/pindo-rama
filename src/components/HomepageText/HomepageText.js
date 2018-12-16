import React from 'react'

import '../HomepageTitle/HomepageTitle.scss'
import '../HomepageContent/HomepageContent.scss'

const HomepageText = ({language}) => {
    return (
        <div className="homepageText">
            <div className='homepageTitle'>
                <h1>{language.header}</h1>
            </div>
            <div className='homepageContent'>
                {language.content.map(line => <p>{line}</p>)}
            </div>
        </div>
    )
}

export default HomepageText
