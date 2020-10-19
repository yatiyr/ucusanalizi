/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component} from 'react';
import Ucak from '../../resources/svgs/ucak.svg';
import {animate} from '../utils/animations';

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

        this.step = this.step.bind(this);
        this.animateSvg = this.animateSvg.bind(this);
        this.stepSvgDraw = this.stepSvgDraw.bind(this);
    }

    step(element : any, progressFunc : any) {
        var from = 0;
        var to   = 300;

        var pro = from + (to-from)*progressFunc;
        element.style.left = pro + 'px';
    }

    componentDidMount() {
        // const point = givePointOnBezier([{x: 0, y: 0},{x:10, y:10}], .55);

    }

    stepSvgDraw(element: any, progressFunc: any) {
        var from = element.children[0].children[0].getTotalLength();
        var to = 0;

        var pro = from + (to-from)*progressFunc;
        element.style.strokeDasharray = from;
        element.style.strokeDashoffset = pro;
    }
    animateSvg() {
        const bezier = [{x: .17, y: .67},{x: 1, y: 1}];
        setInterval(
        () => animate(document.querySelector('#svg1'), bezier ,this.stepSvgDraw,4000),300);
    }

    render() : JSX.Element {
        return(
            <div id="svg1" onClick={this.animateSvg}>
                <Ucak/>
            </div>
        )
    }


}

export default Analiz;