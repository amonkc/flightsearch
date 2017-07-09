declare namespace Jetabroad { 

    interface SearchQuery { 
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

    interface Price {
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

    interface Segment { 
        flightClass: string;
        flightNumber: string;
        departPortCode: string;
        arrivePortCode: string;
        departDttm: string;
        arriveDttm: string;
    }

    interface Leg { 
        segments: Segment[];
    }

    interface Journey { 
        price: Price;
        outboundLeg: Leg;
        inboundLeg?: Leg;
        deeplinkURL: string;
    }

}

interface Window { 
    jQuery: JQueryStatic;
    $: JQueryStatic;
}