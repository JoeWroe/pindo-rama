import React, {Component} from 'react'

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
            <div className="homepage">
                <HomepageLogo/>
                {(this.state.language === 'brazilian') ?
                    <BrazilianHomepageTitle /> :
                    <EnglishHomepageTitle />}
                {(this.state.language === 'brazilian') ?
                    <BrazilianHomepageContent /> :
                    <EnglishHomepageContent />}
                <HomepageButtons setLanguage={this.setLanguage}/>
            </div>
        )
    }
}

export default Homepage