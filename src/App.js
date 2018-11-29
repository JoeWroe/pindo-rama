import React, {Component} from 'react';

import HomepageLogo from "./components/HomepageLogo/HomepageLogo";
import HomepageTitle from "./components/HomepageTitle/HomepageTitle";
import HomepageContent from "./components/HomepageContent/HomepageContent";
import SocialMediaButtons from "./components/SocialMediaButtons/SocialMediaButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLogo />
        <HomepageTitle />
        <HomepageContent />
        <SocialMediaButtons />
      </div>
    );
  }
}

export default App;
