import * as moment from 'moment';
import { flightSearch } from './flight-search';

describe('Flight Search API', () => { 

    beforeEach(() => { 

        window.fetch = jest.fn().mockImplementation( async (request: Request) => { 
            
            const successResponse = new Response('[]', {
                status: 200,
                statusText: 'OK',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const errorResponse = new Response('<div>Error</div>', {
                status: 400,
                statusText: 'Error',
                headers: {
                    'Content-Type': 'text/html'
                }
            });

            let query = await request.json();

            let departDate = moment(query.departDate).startOf('day');
            let returnDate = moment(query.returnDate).endOf('day');
            let today = moment().startOf('day');

            return Promise.resolve(
                (departDate.diff(today) >= 0 && returnDate.diff(today) > 1) ? successResponse : errorResponse
            );
            
        });

    });

    it('should exists', () => {

        expect(flightSearch).toBeDefined();

    });

    it('should return array of available journeys given the dates are valid', async () => {

        const mockQuery: Jetabroad.SearchQuery = {
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
        };

        flightSearch(mockQuery).then(async (data) => {
            expect(await data.json()).toEqual([]);
        });

    });

    it('should return error given any of the dates are invalid', async () => {

        const mockQuery: Jetabroad.SearchQuery = {
            affiliateCode: 'RCTF6B',
            from: 'SYD',
            to: 'BNE',
            departDate: '2016-07-22',
            returnDate: '2017-08-01',
            adults: 1,
            children: 0,
            infants: 0,
            cabinClass: 'Economy',
            oneWayOrReturn: 'Return',
            currencyCode: 'AUD',
            attributeToAffiliate: 'something'
        };

        flightSearch(mockQuery).then(async (data) => {
            expect(await data.text()).toEqual('<div>Error</div>');
        });

    });

});