/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component} from 'react';
import GraphSvg from '../components/svgs/graphSvg';
import ClockSvg from '../components/svgs/clockSvg';
import Rs from '../../resources/svgs/rs.svg';
import Map from '../components/map/Map';
import FlightAnalyzer from './Ucus';

type Props = any;
type State = {
    theme: string;
    situation: string;
    flights: any[];
}

class Analiz extends Component<Props,State> {

    public analyzer: any;
    public interval: any;

    constructor(props : any) {
        super(props);
        this.state = {
            theme: "dark",
            situation: "Idle",
            flights: []
        }
        this.analyzer = new FlightAnalyzer.FlightAnalyzer();
        this.interval = undefined;
        this.getData = this.getData.bind(this);
        this.toggleDataCollection = this.toggleDataCollection.bind(this);
        this.toggledButtonValue = this.toggledButtonValue.bind(this);
    }

    componentDidMount() {
        // const point = givePointOnBezier([{x: 0, y: 0},{x:10, y:10}], .55);

    }

    getData() {
        fetch('https://opensky-network.org/api/states/all?lamin=40.0&lomin=23.0&lamax=47.0&lomax=48.0')
            .then(response => response.json())
            .then(data => {
                this.analyzer.collectData(data.states);
                this.setState({flights: this.analyzer.flights});
            })
    }

    startDataCollection() {
        this.getData();
        this.interval = setInterval(() => this.getData(),10005);
    }

    stopDataCollection() {
        clearInterval(this.interval);
    }

    toggleDataCollection() {
        if(this.state.situation == 'Idle') {
            this.startDataCollection();
            this.setState({situation: 'Stable'});
        }
        else {
            this.stopDataCollection();
            this.setState({situation: 'Idle'});
        }
    }

    toggledButtonValue() {
        if(this.state.situation == "Idle") {
            return "Başlat";
        }
        else {
            return "Durdur";
        }
    }

    render() : JSX.Element {
        return(
            <div className={`main ${this.state.theme}Main${this.state.situation}`}>
                <div className={`header ${this.state.theme}Header${this.state.situation}`}>
                    <div className={`svgHeading`}>
                        <div className={`headingIcon ${this.state.theme}HeadingIcon${this.state.situation}`}>
                            <Rs/>
                        </div>
                        <div className={`heading ${this.state.theme}Heading${this.state.situation}`}>
                            Uçuş Analizi
                        </div>
                    </div>
                    <GraphSvg isRunning={this.state.situation == "Idle" ? false : true} theme={this.state.theme} situation={this.state.situation}/>
                    <div className="btnTime">
                        <div className={`btnStart ${this.state.theme}BtnStart${this.state.situation}`} onClick={this.toggleDataCollection}>
                            {this.toggledButtonValue()}
                        </div>
                        <div className={`btnSettings ${this.state.theme}BtnSettings${this.state.situation}`}>
                            
                        </div>
                        <div className={`time ${this.state.theme}Time${this.state.situation}`}>
                            <ClockSvg theme={this.state.theme} situation={this.state.situation}/>
                        </div>
                    </div>
                </div>
                <div className="mf">
                    <div className="flights darkFlights" onClick={this.getData}>
                        ucuslar
                        <div className="footer darkFooter">
                            afasfa
                        </div>
                    </div>
                    <div className="map darkMap">
                        <Map flights={this.state.flights}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Analiz;