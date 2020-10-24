/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

class Flight {

    public icao24          : string;
    public callsign        : string;
    public origin_country  : string;
    public time_position   : number;
    public last_contact    : number;
    public longitude       : number;
    public latitude        : number;
    public baro_altitude   : number;
    public on_ground       : boolean;
    public velocity        : number;
    public true_track      : number;
    public vertical_rate   : number;
    public sensors         : number[];
    public geo_altitude    : number;
    public squawk          : string;
    public spi             : boolean;
    public position_source : number;
    
    constructor(state: any) {
        this.icao24          = state[0];
        this.callsign        = state[1];
        this.origin_country  = state[2];
        this.time_position   = state[3];
        this.last_contact    = state[4];
        this.longitude       = state[5];
        this.latitude        = state[6];
        this.baro_altitude   = state[7];
        this.on_ground       = state[8];
        this.velocity        = state[9];
        this.true_track      = state[10];
        this.vertical_rate   = state[11];
        this.sensors         = state[12];
        this.geo_altitude    = state[13];
        this.squawk          = state[14];
        this.spi             = state[15];
        this.position_source = state[16];
    }

    setNewState(state: any) {
        this.icao24          = state[0];
        this.callsign        = state[1];
        this.origin_country  = state[2];
        this.time_position   = state[3];
        this.last_contact    = state[4];
        this.longitude       = state[5];
        this.latitude        = state[6];
        this.baro_altitude   = state[7];
        this.on_ground       = state[8];
        this.velocity        = state[9];
        this.true_track      = state[10];
        this.vertical_rate   = state[11];
        this.sensors         = state[12];
        this.geo_altitude    = state[13];
        this.squawk          = state[14];
        this.spi             = state[15];
        this.position_source = state[16];
    }

    isPlaneInside(convexPolygon: any[]) {
        return;
    }



}

class FlightAnalyzer {

    public flights: Flight[]

    constructor() {
        this.flights = [];
    }


    addState(state: any) {
        var flag = false;

        for(var i=0; i<this.flights.length; i++) {
            var icao24 = this.flights[i].icao24;
            if(icao24 == state[0]) {
                this.flights[i].setNewState(state);
                flag = true;
            }
        }

        if(flag == false) {
            var newFlight = new Flight(state);
            this.flights.push(newFlight);
        }
    }

    collectData(states: any[]) {
        states.forEach(element => {
            this.addState(element)
        });
    }
}

export default {Flight, FlightAnalyzer}