/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';


type State = any;
type Props = any;

class ClockSvg extends React.Component<Props,State> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.showTime();
    }

    showTime() {
        function checkTime(i: any) {
            return (i < 10) ? "0" + i : i;
        }

        function startTime() {
            var today = new Date(),
                h = checkTime(today.getHours()),
                m = checkTime(today.getMinutes()),
                s = checkTime(today.getSeconds());


        }

        setInterval(() => {
            startTime()
        }, 500 );
    }
    
    render() : JSX.Element {
        return (
            <div className={`clockContainer ${this.props.theme}ClockContainer${this.props.situation}`}>
                
            </div>            
        )
    }
}

export default ClockSvg;