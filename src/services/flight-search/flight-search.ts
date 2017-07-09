export const flightSearch = async (query: Jetabroad.SearchQuery) => {

    let affiliateData = {
        affiliateCode: 'RCTF6B',
        attributeToAffiliate: 'something'
    };

    let finalQuery = Object.assign(query, affiliateData);

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    let request = new Request('https://t34yzehjn6.execute-api.ap-southeast-2.amazonaws.com/prod/flightsearchv1/', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(finalQuery)
    });

    return window.fetch(request);

};