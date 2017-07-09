interface JQuery { 
    flightSearchBox: (options: FlightSearchOption, defaultQuery: Jetabroad.SearchQuery) => FlightSearchInstance;
}

interface FlightSearchOption { 
    onSearch: (query: Jetabroad.SearchQuery) => void;
}

interface FlightSearchInstance { 
    open: () => void;
    close: () => void;
}