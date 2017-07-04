import * as React from 'react';
import './app.css';

import * as FlightAPI from '../services/flight-search/flight-search';

import SearchBox from '../components/search-box/search-box';
import ResultList from '../components/result-list/result-list';

class App extends React.Component<{}, {}> {

  private journeys: Jetabroad.Journey[];

  constructor() { 
    super();

    this.journeys = [];

  }
  
  componentDidMount() { 
    FlightAPI.flightSearch({
        affiliateCode: 'RCTF6B',
        from: 'SYD',
        to: 'BNE',
        departDate: '2017-07-22',
        returnDate: '2017-08-01',
        adults: 1,
        children: 0,
        infants: 0,
        cabinClass: 'Economy',
        oneWayOrReturn: 'Return',
        currencyCode: 'AUD',
        attributeToAffiliate: 'something'
    }).then((data) => { 
      console.log(data.status);
    });
  }
  
  render() {
    return (
      <div className="app">
        <h1>Flight Search</h1>
        <SearchBox />
        <ResultList />
      </div>
    );
  }
}

export default App;
