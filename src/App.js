import React, {Component} from 'react';

import HomepageLogo from "./components/HomepageLogo/HomepageLogo";
import HomepageTitle from "./components/HomepageTitle/HomepageTitle";
import BrazilianHomepageContent from "./components/HomepageContent/HomepageContent.brazilian";
import EnglishHomepageContent from "./components/HomepageContent/HomepageContent.english";
import HomepageButtons from "./components/HomepageButtons/HomepageButtons";

class App extends Component {
    state = {
        language: 'brazilian'
    }

    render() {
        return (
            <div className="App">
                <HomepageLogo />
                <HomepageTitle />
                { (this.state.language === 'brazilian') ? <BrazilianHomepageContent /> : <EnglishHomepageContent /> }
                <HomepageButtons />
            </div>
        );
    }
}

export default App;
