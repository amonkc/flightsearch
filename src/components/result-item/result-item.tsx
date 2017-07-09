import * as React from 'react';

interface ResultItemProps { 
    journey: Jetabroad.Journey;
}

class ResultItem extends React.Component<ResultItemProps, {}> { 
    render() { 

        let journey = this.props.journey;
        
        let outboundLegs = journey.outboundLeg.segments.map((segment, index) => {
            return (
                <li key={index.toString()}>{segment.departPortCode} --> {segment.arrivePortCode}</li>
            );
        });

        let inboundLegs = !journey.inboundLeg ? '' : journey.inboundLeg.segments.map((segment, index) => {
            return (
                <li key={index.toString()}>{segment.departPortCode} --> {segment.arrivePortCode}</li>
            );
        });

        let price = `${journey.price.currencyCode} $${journey.price.totalAmount}`;
         
        return (
            <div>
                <h4>Outbound</h4>
                <ol>
                    {outboundLegs} 
                </ol>
                <h4>Inbound</h4>
                <ol>
                    {inboundLegs} 
                </ol>
                <div>{price}</div>
                <hr />
            </div>
        );
    }
}

export default ResultItem;