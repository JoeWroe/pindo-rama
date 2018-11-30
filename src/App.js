import React, {Component} from 'react';

import HomepageLogo from "./components/HomepageLogo/HomepageLogo";
import HomepageTitle from "./components/HomepageTitle/HomepageTitle";
import HomepageContent from "./components/HomepageContent/HomepageContent";
import HomepageButtons from "./components/HomepageButtons/HomepageButtons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLogo />
        <HomepageTitle />
        <HomepageContent />
        <HomepageButtons />
      </div>
    );
  }
}

export default App;
