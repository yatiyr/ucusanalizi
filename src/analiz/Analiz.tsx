/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {Component} from 'react';
import GraphSvg from '../components/svgs/graphSvg';
import ClockSvg from '../components/svgs/clockSvg';
import Rs from '../../resources/svgs/rs.svg';
import Map from '../components/map/Map';

type Props = any;
type State = {
    theme: string;
    situation: string;
}

class Analiz extends Component<Props,State> {

    public planes: any;

    constructor(props : any) {
        super(props);
        this.planes = {}
        this.state = {
            theme: "dark",
            situation: "Alert"
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        // const point = givePointOnBezier([{x: 0, y: 0},{x:10, y:10}], .55);

    }

    getData() {
        fetch('https://opensky-network.org/api/states/all?lamin=34.0&lomin=18.0&lamax=39&lomax=29.0')
            .then(response => response.json())
            .then(data => console.log(data))
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
                        <div className={`btnStart ${this.state.theme}BtnStart${this.state.situation}`}>
                            Başlat
                        </div>
                        <div className={`btnSettings ${this.state.theme}BtnSettings${this.state.situation}`}>
                            Ayarlar
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
                        <Map/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Analiz;