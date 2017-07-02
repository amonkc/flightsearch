declare namespace Jetabroad { 

    export interface SearchQuery { 
        affiliateCode: string;
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
        attributeToAffiliate: string;
    }

    export interface Price {
        includesTax: boolean;
        currencyCode: string;
        amount: number;
        pricePerAdult: number;
        pricePerChild?: number;
        pricePerInfant?: number;
        pricePerPassenger: number;
        totalAmount: number;
        totalPricePerAdult: number;
        totalPricePerChild?: number;
        totalPricePerInfant?: number;
        totalPricePerPassenger: number;
        name: string;
    }

    export interface Segment { 
        flightClass: string;
        flightNumber: string;
        departPortCode: string;
        arrivePortCode: string;
        departDttm: string;
        arriveDttm: string;
    }

    export interface Leg { 
        segments: Segment[];
    }

    export interface Journey { 
        price: Price;
        outboundLeg: Leg;
        inboundLeg?: Leg;
        deeplinkURL: string;
    }

}