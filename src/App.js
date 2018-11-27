import React, {Component} from 'react';

import HomepageLogo from "./components/HomepageLogo/HomepageLogo";
import HomepageTitle from "./components/HomepageTitle/HomepageTitle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomepageLogo />
        <HomepageTitle />
      </div>
    );
  }
}

export default App;
