import * as $ from 'jquery';
window.jQuery = $;
window.$ = $;
import * as React from 'react';
import './app.css';

import SearchBox from '../components/search-box/search-box';
import ResultList from '../components/result-list/result-list';

interface AppState { 
  journey: Jetabroad.Journey[];
  searching: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor() { 
    super();

    this.state = {
      journey: [],
      searching: false
    };

  }

  onSearching() { 
    this.setState({
      searching: true
    });
  }

  onResult(journey: Jetabroad.Journey[]) { 
    this.setState({
      journey: journey,
      searching: false
    });
  }
  
  render() {
    return (
      <div className="app">
        <h1>Flight Search</h1>
        <SearchBox
          onSearching={() => this.onSearching()}  
          onResult={(journey) => this.onResult(journey)}
        />
        {this.state.searching &&
          <p>
            Searching....
          </p>
        }
        <ResultList journey={this.state.journey} />
      </div>
    );
  }
}

export default App;
