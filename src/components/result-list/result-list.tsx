import * as React from 'react';
import ResultItem from '../result-item/result-item';

interface ResultListProps { 
    journey: Jetabroad.Journey[];
}

class ResultList extends React.Component<ResultListProps, {}> { 
    render() { 
        let resultItems = this.props.journey.map(
            (journey, index) => <ResultItem key={index.toString()} journey={journey} />
        );

        return (
            <div>
                {resultItems.length > 0 &&
                    <p>Result List total of {this.props.journey.length} items</p>
                }
                {resultItems}
            </div>
        );
    }
}

export default ResultList;