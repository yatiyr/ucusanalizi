/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component} from 'react';
import TurkiyeBayrak from '../../resources/svgs/turkiyeBayrak.svg';
import {givePointOnBezier, timeFunction, move} from '../utils/animations';

type Props = any;
type State = {
    
}

type Theme = {
    theme: string;
    toggleTheme: (arg0: string) => void;
}


class Analiz extends Component<Props,State> {
    toggleTheme: ((arg0: string) => void) | undefined;
    
    constructor(props : any) {
        super(props);
    }

    componentDidMount() {
        // const point = givePointOnBezier([{x: 0, y: 0},{x:10, y:10}], .55);
        // console.log(point);
        console.log(timeFunction([{x: .5, y: 1}], 0.05543))
    }

    render() : JSX.Element {
        return(
            <div id="svg1" onClick={move}>
                eren
            </div>
        )
    }


}

export default Analiz;