import * as React from 'react';
import * as $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/datepicker.css';
import 'jquery-flight-search';
import 'jquery-flight-search/dist/jquery-flight-search.css';

import * as FlightAPI from '../../services/flight-search/flight-search';

interface SearchBoxState {
    from: string;
    to: string;
    departDate: string;
    returnDate: string;
    adults: number;
    children: number;
    infants: number;
    cabinClass: string;
    oneWayOrReturn: 'OneWay' | 'Return';
    currencyCode: string;
}

interface SearchBoxProps {
    onResult: (journey: Jetabroad.Journey[]) => void;
    onSearching: () => void;
}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {

    private flightSearchBox: FlightSearchInstance;

    constructor(props: SearchBoxProps) {
        super(props);

        this.state = {
            from: 'SYD',
            to: 'PAR',
            departDate: '2017-07-22',
            returnDate: '2017-08-01',
            adults: 1,
            children: 0,
            infants: 0,
            cabinClass: 'Economy',
            oneWayOrReturn: 'Return',
            currencyCode: 'AUD',
        };

    }

    openSearchBox() {
        this.flightSearchBox.open();
    }

    componentDidMount() {
        this.flightSearchBox = $('body').flightSearchBox(
            {
                onSearch: (query: Jetabroad.SearchQuery) => {

                    this.props.onResult([]);                    
                    this.props.onSearching();

                    this.setState(query);

                    FlightAPI.flightSearch(
                        Object.assign(this.state, {
                            affiliateCode: 'RCTF6B',
                            attributeToAffiliate: 'something'
                        }
                        )).then(async (data) => {

                            if (data.status !== 200) {
                                return;
                            }

                            let journey: Jetabroad.Journey[] = await data.json();
                            this.props.onResult(journey);
                        });
                }
            },
            Object.assign({}, this.state, {
                departDate: new Date(Date.now() + (1000 * 60 * 60 * 24 * 4)),
                returnDate: new Date(Date.now() + (1000 * 60 * 60 * 24 * 11))
            })
        );

        this.flightSearchBox.open();
    }

    render() {

        let query = this.state;        

        return (
            <div id="search-box">
                <div>
                    {query.from} -> {query.to}
                </div>
                <div>
                    Depart {query.departDate} and come back on {query.returnDate}
                </div>
                <div>
                    Passengers: {query.adults} Adult(s), {query.children} Children, {query.infants} Infant(s)
                </div>
                <div>
                    <button onClick={(e) => this.openSearchBox()}><b>Edit search</b></button>
                </div>
            </div>
        );
    }
}

export default SearchBox;