export const mockResult: Jetabroad.Journey[] = [{
    price: {
        includesTax: true,
        currencyCode: 'AUD',
        amount: 705.98,
        pricePerAdult: 705.98,
        pricePerPassenger: 705.98,
        totalAmount: 945.82,
        totalPricePerAdult: 945.82,
        totalPricePerPassenger: 945.82,
        name: 'Economy'
    },
    outboundLeg: {
        segments: [
            {
                flightClass: 'Economy',
                flightNumber: 'AK889',
                departPortCode: 'DMK',
                arrivePortCode: 'KUL',
                departDttm: '2017-07-22T20:20:00',
                arriveDttm: '2017-07-22T23:30:00'
            },
            {
                flightClass: 'Economy',
                flightNumber: 'D7220',
                departPortCode: 'KUL',
                arrivePortCode: 'SYD',
                departDttm: '2017-07-23T10:00:00',
                arriveDttm: '2017-07-23T20:10:00'
            }
        ]
    },
    inboundLeg: {
        segments: [
            {
                flightClass: 'Economy',
                flightNumber: 'D7223',
                departPortCode: 'SYD',
                arrivePortCode: 'KUL',
                departDttm: '2017-08-01T11:00:00',
                arriveDttm: '2017-08-01T17:35:00'
            },
            {
                flightClass: 'Economy',
                flightNumber: 'FD308',
                departPortCode: 'KUL',
                arrivePortCode: 'DMK',
                departDttm: '2017-08-01T20:05:00',
                arriveDttm: '2017-08-01T21:20:00'
            }
        ]
    },
    deeplinkURL: 'http://www.jetabroad.com.au/deeplink?d=5c0f92c3-e7c2-4085-b798-3781c3384871&r=%2fFlights%2fBKK-SYD-22-Jul-17%2fSYD-BKK-01-Aug-17%2f1Adult&utm_medium=api&utm_source=aff_RCTF6B'
}];