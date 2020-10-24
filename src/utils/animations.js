/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */


/**
 * @abstract Gives edges between given control points
 * @author Eren Dere (yatiyr)
 * @param controlPoints 
 */
function giveEdges(controlPoints) {
    var edges = [];
    for(var i=0; i<controlPoints.length -1; i++) {
        var edge = {first: controlPoints[i], second: controlPoints[i+1]};
        edges.push(edge);
    }
    return edges;
}

/**
 * @abstract Gives point on edge wrt a number t between 0,1
 * @author Eren Dere (yatiyr)
 * @param edge 
 * @param t 
 */
function giveEdgePoint(edge, t) {
    return {x: edge.first.x + t * (edge.second.x - edge.first.x),
            y: edge.first.y + t * (edge.second.y - edge.first.y)};
}

/**
 * @abstract Gives point on a bezier curve wrt a number t between 0,1
 * @author Eren Dere (yatiyr)
 * @param controlPoints 
 * @param t 
 */
function givePointOnBezier(controlPoints, t) {
    var edges = giveEdges(controlPoints);
    if(edges.length == 1) {
        return giveEdgePoint(edges[0], t);
    }
    else {
        var newPoints = [];
        for(var i=0; i<edges.length; i++) {
            var edge = edges[i];
            newPoints.push(giveEdgePoint(edge, t));
        }
        return givePointOnBezier(newPoints, t);
    }
}

/**
 * @abstract Gives progress of a bezier time function
 * @author Eren Dere (yatiyr)
 * @param controlPoints 
 * @param t 
 */
function timeFunction(controlPoints,t) {
    var points = [...controlPoints];
    var pointf = {x: 0, y: 0};
    var pointl = {x: 1, y: 1};

    points.unshift(pointf);
    points.push(pointl);

    return givePointOnBezier(points, t).y;
}


/*
    Move fonksiyonu -> duration, frame
*/

/**
 * @abstract This function animates step function
 * @author Eren Dere (yatiyr)
 * @param element 
 * @param bezier 
 * @param step 
 * @param duration 
 */
export function animate(element, bezier, step, duration) {

    var id = setInterval(frame, 5);
    var progressDuration = duration/5;
    var progress = 0;

    function frame() {
        var t = progress/progressDuration;
        var progressFunc = timeFunction(bezier,t);

        if(progress == progressDuration) {
            step(element,progressFunc);
            clearInterval(id);
        }
        else {
            progress++;
            step(element,progressFunc);
        }

    }
}

function move() {
    var elem = document.querySelector('#svg1');
    var progress = 0;
    var id = setInterval(frame, 5);
    var from = 0;
    var to = 300;
    function frame() {
      
      var t = progress/200;
      var func = timeFunction([{x: .6, y: 1.43},{x: .64, y: -.44}],t);
      var pro = from + (to-from)*func;    

      if (progress == 200) {
        elem.style.left = pro + 'px';
        clearInterval(id);
      } else {
        progress++;
        elem.style.left = pro + 'px';
      }
    }
}
