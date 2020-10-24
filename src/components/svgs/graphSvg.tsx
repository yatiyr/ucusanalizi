/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Flag from '../../../resources/svgs/yuklemeBayrak2.svg';

type State = any;
type Props = any;

class GraphSvg extends React.Component<Props,State> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        //this.node = ReactDOM.findDOMNode(this);
    }

    
    render() : JSX.Element {
        return (
            <div className="graphContainer">
                {
                    this.props.isRunning ? 
                    <div className={`graphSvg ${this.props.theme}GraphSvg${this.props.situation}`}>
                        <Flag/>
                    </div> :
                    <div className={`graphSvg ${this.props.theme}GraphSvg${this.props.situation} hiding`}>
                        <Flag/>
                    </div>                                       
                }
            </div>            
        )
    }
}

export default GraphSvg;