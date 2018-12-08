import React, {Component} from 'react';

import HomepageLogo from "./components/HomepageLogo/HomepageLogo";
import BrazilianHomepageTitle from "./components/HomepageTitle/HomepageTitle.brazilian";
import EnglishHomepageTitle from "./components/HomepageTitle/HomepageTitle.english";
import BrazilianHomepageContent from "./components/HomepageContent/HomepageContent.brazilian";
import EnglishHomepageContent from "./components/HomepageContent/HomepageContent.english";
import HomepageButtons from "./components/HomepageButtons/HomepageButtons";

class App extends Component {
    state = {
        language: 'brazilian'
    }

    setLanguage = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <div className="App">
                <HomepageLogo/>
                {(this.state.language === 'brazilian') ?
                    <BrazilianHomepageTitle /> :
                    <EnglishHomepageTitle />}
                {(this.state.language === 'brazilian') ?
                    <BrazilianHomepageContent /> :
                    <EnglishHomepageContent />}
                <HomepageButtons setLanguage={this.setLanguage}/>
            </div>
        );
    }
}

export default App;
