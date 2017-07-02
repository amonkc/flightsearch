const flightSearch = async (query: Jetabroad.SearchQuery): Promise<Jetabroad.Journey[]> => {
    
    let result = await fetch('http://api.jetabroad.com/FlightSearchV1/');
    
    return result.json();
};

export default flightSearch;